export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /* Method that: -When the class is cast into a Number, it should return the size
                  -When the class is cast into a String, it should return the location
  */
  [Symbol.toPrimitive](value) {
    if (value === 'number') return this._size;
    if (value === 'string') return this._location;
    return null;
  }
}
