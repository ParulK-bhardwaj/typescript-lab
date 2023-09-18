
// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West
// Use a string enum: https://www.typescriptlang.org/docs/handbook/enums.html#string-enums

enum Direction {
	N = 'North', 
	S = 'South', 
	E = 'East', 
	W = 'West'
}

// Should having a heading property type Direction

class MapPosition {
	direction: Direction
	constructor() {
		this.direction = Direction.N
	}

	// takes a new Direction as an argument
	move(newDirection: Direction) {
		this.direction = newDirection
		console.log(this.direction)
		// set the direction on your property 
		// Print the new direction
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `you are heading ${this.direction}`
	}
}

const location = new MapPosition()
console.log(location.describe())
// Might output:
// "You are heading north"
location.move(Direction.W)



export default MapPosition
