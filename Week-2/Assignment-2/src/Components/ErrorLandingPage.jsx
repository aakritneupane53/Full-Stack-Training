import './error.css'

const ErrorLandingPage = ({message, onRetry}) => {
  return (
    <div className="error-container">
      <h1>Something went wrong</h1>
      <p>{message || "Unable to load data."}</p>

      {onRetry && (
        <button onClick={onRetry} className="retry-btn">
          Retry
        </button>
      )}
    </div>
  )
}

export default ErrorLandingPage