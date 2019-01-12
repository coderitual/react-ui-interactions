import React from 'react'
import ReactDOM from 'react-dom'

const title = 'Hello React UI Interactions'

ReactDOM.render(<div>{title}</div>, document.getElementById('app'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration)
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
