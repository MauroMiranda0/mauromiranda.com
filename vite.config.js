import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'

const PREVIEW_ROUTE = '/conciencia-preview/index.html'

const buildPreviewHtml = (html) => {
  return html
    .replace(
      '</title>',
      '</title><script>window.history.replaceState(window.history.state, "", "/")</script>'
    )
    .replaceAll('src="/assets/', 'src="/distConciencia/assets/')
    .replaceAll('href="/assets/', 'href="/distConciencia/assets/')
    .replaceAll('src="/media/', 'src="/distConciencia/media/')
    .replaceAll('href="/media/', 'href="/distConciencia/media/')
    .replaceAll('src="/docs/', 'src="/distConciencia/docs/')
    .replaceAll('href="/docs/', 'href="/distConciencia/docs/')
}

const concienciaPreview = () => ({
  name: 'conciencia-preview',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url !== PREVIEW_ROUTE) {
        next()
        return
      }

      const source = resolve(__dirname, 'distConciencia', 'index.html')

      if (!existsSync(source)) {
        res.statusCode = 404
        res.end('Conciencia preview not found')
        return
      }

      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(buildPreviewHtml(readFileSync(source, 'utf8')))
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
