import { useState } from 'react'
import Icon from './Icon'
import './ImageWithFallback.scss'

const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const [hasError, setHasError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!src || hasError) {
    return (
      <div className="image-fallback" {...props}>
        <Icon name="image" size="2xl" />
        <span>{alt || 'Imagen no disponible'}</span>
      </div>
    )
  }

  return (
    <div className={`image-wrapper ${className || ''}`}>
      {!loaded && <div className="image-skeleton" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
        {...props}
      />
    </div>
  )
}

export default ImageWithFallback
