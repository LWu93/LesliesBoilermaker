import React from 'react'
import ReactDOM from 'react-dom'
import '../public/index.css'
import { Provider } from 'react-redux'
import store from './store'

// import store from './store'
import Root from './Components/Root'

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);

