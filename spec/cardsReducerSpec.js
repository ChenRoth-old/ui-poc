
import reducer from '../src/reducers/cards-reducer'
// var reducer = require('../src/reducers/cards-reducer')

describe('cards reducer', () => {

  let cards = []
  for (let id = 1; id <= 3; id++) {
    cards.push({id})
  }

  it('should add a card', () => {
    let newCard = { id: '4'}
    let reduced = reducer(cards, {
      type: 'ADD_CARD',
      card: newCard
    })
    expect(reduced).toContain(newCard)
  })

  it('should remove a card', () => {
    let reduced = reducer(cards, {
      type: 'REMOVE_CARD',
      card: cards[1]
    })
    let expected = cards.slice(0)
    expected.splice(1, 1)
    expect(reduced).toEqual(expected)
  })

  it('shouldnt remove a card when it doesnt exist', () => {
    let reduced = reducer(cards, {
      type: 'REMOVE_CARD'
    }, {})
    expect(reduced).toEqual(cards)
  })
})