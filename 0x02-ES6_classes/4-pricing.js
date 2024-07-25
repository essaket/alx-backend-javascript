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
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a string');
    }
    this._amount = value;
  }

  /* Gets and Sets for currency */
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a string');
    }
    this._currnecy = value;
  }

  /* Method that returns the attributes */
  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  /* Static method that return the amount multiplied by the conversion rate */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a nmber');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a nmber');
    }
    return amount * conversionRate;
  }
}
