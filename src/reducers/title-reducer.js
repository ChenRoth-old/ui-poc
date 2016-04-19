let defaultState = require('./default-state.json')

export default function titleReducer(title = defaultState.defaultTitle, action) {
  return title
}