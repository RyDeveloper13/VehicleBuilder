// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  doWheelie: boolean;


  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    doWheelie: boolean
  ) {
    // Call the parent class constructor
    super();

    this.doWheelie = doWheelie;
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = [];

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    console.log(`Motorbike ${make} ${model} is doing a wheelie`);
  }
  override printDetails(): void {
    super.printDetails()
    {
      console.log(`${this.vin}: ${this.make}: ${this.model}`);
      console.log(`${this.year}: ${this.weight}: ${this.topSpeed}`);
      console.log(`${this.color}: ${this.wheels}`);
    }
  }



}

// Export the Motorbike class as the default export
export default Motorbike;
