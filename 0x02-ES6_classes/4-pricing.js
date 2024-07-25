import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /* Gets and Set for amount */
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  /* Gets and Sets for currency */
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currnecy = value;
  }

  /*   */
  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  /*  */
  
