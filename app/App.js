import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import UserForm from './containers/UserForm'
import UserDetails from './containers/UserDetails'
import configureStore from './redux/store'

let initialState = {
  user: {
    username: 'kurt',
    id: 13
  },
  load: false
}

let store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={UserForm}/>
        <Route path="users" component={UserDetails}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)
