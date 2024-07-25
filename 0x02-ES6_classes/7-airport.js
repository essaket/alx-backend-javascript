export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Define the default string description for console.log and other uses
  get [Symbol.toStringTag]() {
    return this._code;
  }

  // Override the default toString method
  toString() {
    return `[object ${this._code}]`;
  }
}
