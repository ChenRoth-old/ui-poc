import riot from 'riot'
// import './style/elements.scss'
function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
requireAll(require.context("./style", true, /^\.\/.*\.scss$/));

import {
  createStore,
  applyMiddleware
}
from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import util from 'util'
import ReduxMixin from './mixins/redux'

import './tags/stats/stats.tag'

import reducer from './reducers'

let store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger())
)
window.store = store
window.riot = riot
ReduxMixin()(store)

import fetchStats from './actions/stats'
window.fetchStats = fetchStats

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*')

})