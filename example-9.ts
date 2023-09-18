

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

// Import Kaiju and KaijuType from example-8.js

// Fix the rampage function so it makes use of the KaijuType enum
import { Kaiju, KaijuType } from './example-8.js'

function rampage(kaiju: Kaiju, city: string): string {
	const { name, type, power } = kaiju
	let action: string
	switch(type) {
		case KaijuType.ape: 
			action = 'smash'
			break

		case KaijuType.lizard:
			action = 'burn'
			break

		case KaijuType.flying: 
			action = 'flap'	
			break
	} 
	let result = `${name} ${action} over ${city} causing ${power * 10000} damage!`
	return result
}

const gojira = new Kaiju('Gojira',  KaijuType.lizard, 90)
// Define two more monsters
const noName = new Kaiju('No Name',  KaijuType.ape, 1000)

const jhinga = new Kaiju('Jhinga',  KaijuType.flying, 100)
console.log(rampage(gojira, 'tokyo'))
console.log(rampage(noName, 'Delhi'))
console.log(rampage(jhinga, 'New York'))
// Set the new monsts to rampage in a city

