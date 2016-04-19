'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cardsReducer;
var defaultState = require('./default-state.json');

function cardsReducer() {
  var cards = arguments.length <= 0 || arguments[0] === undefined ? defaultState.cards : arguments[0];
  var action = arguments[1];

  switch (action.type) {

    case 'ADD_CARD':
      var newCards = cards.slice(0);
      newCards.push(action.card);
      return newCards;

    case 'REMOVE_CARD':
      var index = cards.indexOf(action.card);
      if (index > -1) {
        var _newCards = cards.slice(0);
        _newCards.splice(index, 1);
        return _newCards;
      } else {
        return cards;
      }
    default:
      return cards;
  }
}

