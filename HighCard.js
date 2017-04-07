var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

var draw1 = Math.floor(Math.random() * (cards.length))
var draw2 = Math.floor(Math.random() * (cards.length)) 

var card1 = cards[draw1]
var card2 = cards[draw2]

console.log('Player 1: ', card1)
console.log('Player 2: ', card2)