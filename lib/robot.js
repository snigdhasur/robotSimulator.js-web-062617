'use strict';

const Robot = (function Robot() {
  // implement your solution here!

  let counter = 0
  let instances = []
  let directions = ['north', 'east', 'south', 'west']

  return class Robot {

    // Constructor method
    // cookie = new Dessert('cookie', ['flour', 'sugar', 'butter', 'eggs'])
    constructor(){
    	this.x = 0
		this.y = 0
		this.coordinates = [this.x, this.y]
		this.bearing = null
    }

    place(object) {
	  this.x = object.x 
	  this.y = object.y
	  this.coordinates = [object.x, object.y]
	  this.bearing = object.direction
      // instances.push(this)
    }



    orient(input) {
    	if(!directions.includes(input)){
    		throw new Error("Invalid Robot Bearing")
    	} else {
    		  this.bearing = input
    	}
    
    }

    turnRight() {
    	if(this.bearing === 'north') {
    		this.bearing = 'east'
    	} else if (this.bearing === 'east') {
    		this.bearing = 'south'
    	} else if (this.bearing === 'south') {
    		this.bearing = 'west'
    	} else {
    		this.bearing = 'north'
    	}

    }



    turnLeft() {
    	if(this.bearing === 'north') {
    		this.bearing = 'west'
    	} else if (this.bearing === 'east') {
    		this.bearing = 'north'
    	} else if (this.bearing === 'south') {
    		this.bearing = 'east'
    	} else {
    		this.bearing = 'south'
    	}

    }

    at(x,y) {
    	this.x = x
    	this.y = y
    	this.coordinates = [this.x, this.y]

    }


    advance() {
    	if(this.bearing === 'north') {
    		this.y += 1
    		this.coordinates = [this.x, this.y]
    	} else if (this.bearing === 'east') {
    		this.x += 1
    		this.coordinates = [this.x, this.y]
    	} else if (this.bearing === 'south') {
    		this.y -= 1
    		this.coordinates = [this.x, this.y]
    	} else {
    		this.x -= 1
    		this.coordinates = [this.x, this.y]
    	}
    }


	instructions(string){
		return string.split("").map(function(letter) {
			if(letter === "L") {
				return "turnLeft"
			} else if(letter === "R") {
				return "turnRight"
			} else  // letter must be A 
				{
				return "advance"
			}
		})
	}

	evaluate(string) {
		this.instructions(string).forEach(function(instruction) {
			if(instruction === "turnRight") {
				this.turnRight()
			} else if (instruction === "turnLeft") {
				this.turnLeft()
			} else 	// this would advance
				{
				this.advance()
			}

		}, this)
	}


	

	    
 } // closes class Robot   
  } // closes function Robot
)()

