
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;


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
    towingCapacity: number
  ) {
    // Call the parent class constructor
    super();


    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = [];
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }





  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck): void {
    const vehicleDescription = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${vehicleDescription} is being towed by the truck.`);
    } else {
      console.log(`The ${vehicleDescription} is too heavy to be towed by this truck.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the parent class's printDetails method
    super.printDetails();
    // Log additional Truck-specific details
    console.log(` VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);

    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log(`Wheels: ${this.wheels.length} wheels with diameter ${this.wheels[0].diameter} inches each`);
  }
}

// Export the Truck class as the default export
export default Truck;
