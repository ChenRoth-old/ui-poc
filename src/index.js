import riot from 'riot'
import {
  createStore,
  applyMiddleware
}
from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import util from 'util'

import './tags/stats/stats.tag'

import reducer from './reducers'

let store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger())
)
window.store = store
window.riot = riot

import fetchStats from './actions/stats'
window.fetchStats = fetchStats

// make the ui update on every store change
// this is inefficient and has to be replaced with a better solution
store.subscribe(riot.update)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*')
})