// Part One
// Create a class for vehicle. Each vehicle instance should have the following properties:
// make
// model
// year
// Each vehicle instance should have access to a method called honk, which returns the string “Beep.”
// let myFirstVehicle = new Vehicle("Honda", "Mon

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); // "Beep."

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999." 

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
honk() {
    return 'Beep.';
}

toString () {
    return `The vehicle is a ${this.make} ${this.model} ${this.year}.`;
}
}


class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year); 
        this.numWheels = 2;
    }
revEngine() {
    return 'VROOM!!!';
}
}


class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
}
add(newVehicle) {
if(!(newVehicle instanceof Vehicle)) {
    return 'Only vehicles are allowed in here';
}
if(this.vehicles.length >= this.capacity) {
    return 'Sorry, we are full.';
}
this.vehicles.push(newVehicle);
return 'Vehicle added!';
}
}