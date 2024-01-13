import React from 'react'

const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center align-items-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default LoadingSpinner;