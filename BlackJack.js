var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

var draw1 = Math.floor(Math.random() * (cards.length))
var draw2 = Math.floor(Math.random() * (cards.length)) 

var value1 = getValue(draw1 + 2)
var value2 = getValue(draw2 + 2)

var card1 = cards[draw1]
var card2 = cards[draw2]

console.log('You got a:', value1, 'and a', value2)
console.log('Score:', (value1 + value2))

function getValue (value) {
	if (value <= 10) {
		return value
	} else if (value === 12) {
		return 11
	} else {
		return 10
	}
}