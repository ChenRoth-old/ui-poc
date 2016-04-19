let defaultState = require('./default-state.json')

export default function cardsReducer(cards = defaultState.cards, action) {
  switch (action.type) {

    case 'ADD_CARD':
      let newCards = cards.slice(0)
      newCards.push(action.card)
      return newCards

    case 'REMOVE_CARD':
      let index = cards.indexOf(action.card)
      if (index > -1) {
        let newCards = cards.slice(0)
        newCards.splice(index, 1)
        return newCards
      } else {
        return cards
      }
    default:
      return cards
  }

}