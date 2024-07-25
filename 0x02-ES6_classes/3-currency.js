export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /* Gets and sets for code */
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  /* Gets and Sets for name */
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /* Method that will return the attributes in the following format name (code) */
  displayFullCurrency() {
    return `${this._name} (${this.code})`;
  }
}
