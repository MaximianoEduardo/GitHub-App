'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default // Apenas atualizaçoes necessarias
    renderApp(NextApp)
  })
}
// var sum = require('./app')
// console.log(sum(1,2))
console.log('hello webpack !!')
