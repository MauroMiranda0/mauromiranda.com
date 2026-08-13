import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'fs'

const PREVIEW_ROUTE = '/conciencia-preview/index.html'

const rewriteAssetPaths = (content) =>
  content
    .replaceAll('"/assets/', '"/distConciencia/assets/')
    .replaceAll('"assets/', '"distConciencia/assets/')
    .replaceAll('"/media/', '"/distConciencia/media/')
    .replaceAll('"/docs/', '"/distConciencia/docs/')

const buildPreviewHtml = (html) =>
  rewriteAssetPaths(html).replace(
    '</title>',
    '</title><script>window.history.replaceState(window.history.state, "", "/")</script>'
  )

const rewriteBuildAssets = (dir) => {
  for (const entry of readdirSync(dir)) {
    const filePath = resolve(dir, entry)
    if (statSync(filePath).isDirectory()) {
      rewriteBuildAssets(filePath)
      continue
    }
    if (!/\.(js|css)$/.test(entry)) continue
    writeFileSync(filePath, rewriteAssetPaths(readFileSync(filePath, 'utf8')))
  }
}

const concienciaPreview = () => ({
  name: 'conciencia-preview',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === PREVIEW_ROUTE) {
        const source = resolve(__dirname, 'distConciencia', 'index.html')

        if (!existsSync(source)) {
          res.statusCode = 404
          res.end('Conciencia preview not found')
          return
        }

        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(buildPreviewHtml(readFileSync(source, 'utf8')))
        return
      }

      const assetMatch = req.url.match(/^\/distConciencia\/assets\/.+\.(js|css)$/)
      if (!assetMatch) {
        next()
        return
      }

      const filePath = resolve(__dirname, `.${decodeURIComponent(req.url)}`)
      if (filePath.includes('..') || !existsSync(filePath)) {
        next()
        return
      }

      res.setHeader(
        'Content-Type',
        `text/${assetMatch[1] === 'js' ? 'javascript' : 'css'}; charset=utf-8`
      )
      res.end(rewriteAssetPaths(readFileSync(filePath, 'utf8')))
    })
  },
  closeBundle() {
    const sourceDir = resolve(__dirname, 'distConciencia')
    const destinationDir = resolve(__dirname, 'dist', 'distConciencia')
    const previewDir = resolve(__dirname, 'dist', 'conciencia-preview')
    const sourceHtml = resolve(sourceDir, 'index.html')
    const previewHtml = resolve(previewDir, 'index.html')

    if (existsSync(sourceDir)) {
      cpSync(sourceDir, destinationDir, { recursive: true })
      rewriteBuildAssets(destinationDir)
    }

    if (existsSync(sourceHtml)) {
      mkdirSync(previewDir, { recursive: true })
      writeFileSync(previewHtml, buildPreviewHtml(readFileSync(sourceHtml, 'utf8')))
    }
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), concienciaPreview()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@styles': resolve(__dirname, './src/styles'),
      '@assets': resolve(__dirname, './src/assets'),
      '@data': resolve(__dirname, './src/data'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/utils')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:map"; @use "@styles/abstracts/variables" as *; @use "@styles/abstracts/mixins" as *;`
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          router: ['react-router-dom']
        }
      }
    }
  }
})
