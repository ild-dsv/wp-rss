import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from '../shared/store'

const store = configureStore(false)

function render(Component) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Component />
    </Provider>
  ,
    document.getElementById('react-root')
  )
}

render(App)
