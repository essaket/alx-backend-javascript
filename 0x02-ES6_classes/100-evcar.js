import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* Returned should be an instance of Car instead of EVCar */
  cloneCar() {
    const Car = this.constructor;
    return new Car();
  }
}
