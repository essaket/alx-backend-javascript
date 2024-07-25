export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /* Method should return a new object of the class */
  cloneCar() {
    const object = this.constructor;
    return new object();
  }
}
