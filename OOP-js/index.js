class Car {
    constructor(color) {
        if (color) this.color = color
    }

    color = 'white'
    nWheels = 4
    drive = () => { console.log("vroom") }

}

//instantiate


let yourCar = new Car()

console.log(yourCar)


class Ferrari extends Car {
    constructor(color) {
        super(color)
        if (color) this.color = color
    }

    color = 'red'
}

let ferrari = new Ferrari()

ferrari.color = 'green'

console.log(ferrari.color)

let myFerrari = new Ferrari('black')

console.log(myFerrari.nWheels)