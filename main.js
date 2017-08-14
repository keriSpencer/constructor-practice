function Dog(name, color, hungry) {
  'use strict'
  this.name = name
  this.color = color
  this.status = 'normal'
  this.hungry = hungry
}

function Human(name, pet, feed, cool) {
  'use strict'
  this.name = name
  this.pet = function(dog) {
    dog.status = 'happy'
  }
  this.feed = function(dog) {
    dog.hungry = false
  }
  this.cool = cool
}

// dogs
let sadie = new Dog('sadie', 'black', false)
let moonshine = new Dog('moonshine', 'white', true)
let atticus = new Dog('atticus')

// humans
let mason = new Human('mason', 'happy', false, false)
let julia = new Human('julia', 'happy', true, true)
