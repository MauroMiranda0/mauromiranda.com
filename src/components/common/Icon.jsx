/**
 * Componente Icon - Wrapper para Material Symbols
 * Proporciona una interfaz consistente para iconos
 */
import PropTypes from 'prop-types'
import './Icon.scss'

const Icon = ({ 
  name, 
  className = '', 
  size = 'md',
  variant = 'outlined',
  fill = false,
  weight = 400,
  grade = 0,
  opticalSize = 24,
  ...props 
}) => {
  const iconClasses = [
    'material-symbols-outlined',
    'icon',
    `icon--${size}`,
    `icon--${variant}`,
    fill && 'icon--filled',
    className
  ].filter(Boolean).join(' ')

  const iconStyle = {
    fontVariationSettings: `
      'FILL' ${fill ? 1 : 0},
      'wght' ${weight},
      'GRAD' ${grade},
      'opsz' ${opticalSize}
    `
  }

  return (
    <span 
      className={iconClasses}
      style={iconStyle}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  variant: PropTypes.oneOf(['outlined', 'rounded', 'sharp']),
  fill: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700]),
  grade: PropTypes.oneOf([-25, 0, 200]),
  opticalSize: PropTypes.oneOf([20, 24, 40, 48])
}

export default Icon