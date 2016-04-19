import card from '../src/tags/card/card.tag'
// let card = require('../src/tags/card/card.tag');

describe('card tag', function() {

  beforeEach(function() {
    // let output = riot.render(card, { name: 'chen roth', id: '021111'});
    var html = document.createElement('card');
       document.body.appendChild(html);
  });

  it('should display card holder name', function() {
    riot.mount('card', { name: 'chen roth', id: '021111'});
    expect(document.querySelector('card p').textContent).toBe('chen roth')
  });
});