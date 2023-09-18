// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

interface RobotInterface {
    name: string
    power: number
    type: string
}

class Robot implements RobotInterface {
    name: string
    type: string
    power: number
    
    constructor(name: string, type: string, power: number) {
      this.name = name
      this.type = type
      this.power = power
    }
  
    describe(): void {
      console.log(`name: ${this.name} type: ${this.type} power: ${this.power}`);
    }
}

const robot = new Robot("GROOT", "I AM GROOT", 60)
robot.describe()

export { Robot, RobotInterface }
  