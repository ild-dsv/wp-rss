import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from '../shared/app'

function render(Component) {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  )
}

console.log(App)
render(App)

if (module.hot) {
  module.hot.accept('../shared/app.js', () => {
    const NewApp = require('../shared/app.js').default
    render(NewApp)
  })
}