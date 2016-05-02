import riot from 'riot'
import {
  createStore
}
from 'redux'
import util from 'util'

import reducer from './reducers'

let store = createStore(reducer)
window.store = store
window.riot = riot

function printState() {
  console.info(`STORE:
    ${util.inspect(store.getState())}`)
}
printState()
store.subscribe(printState)

// make the ui update on every store change
// this is inefficient and has to be replaced with a better solution
store.subscribe(riot.update)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('*')
})