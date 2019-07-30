import React from 'react'
import ReactDOM from 'react-dom'
import App from './layout'
import * as serviceWorker from './serviceWorker'
import './styles/global.scss'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
