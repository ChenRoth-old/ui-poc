import { combineReducers } from 'redux'

import cards from './cards-reducer'
import title from './title-reducer'

export default combineReducers({
  cards,
  title
})