import { Component } from 'react'
import Icon from './Icon'
import './ErrorBoundary.scss'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <Icon name="error" size="2xl" />
            <h1>Error del Sistema</h1>
            <p>Ocurrió un error inesperado. Por favor recarga la página.</p>
            <button
              className="btn btn--primary"
              onClick={() => window.location.reload()}
            >
              RECARGAR SISTEMA
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
