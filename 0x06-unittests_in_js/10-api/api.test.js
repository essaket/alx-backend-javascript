/**
 * 10. Deep equality & Post integration testing
 */

const { expect } = require('chai');
const request = require('request');

describe('GET /', () => {
  it('responds with correct status code', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });

  it('responds with correct status code', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      }
    });
  });

  it('responds with correct status code', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('Cart ID is not a number');
        done();
      }
    });
  });

  it('responds with correct status code', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
        done();
      }
    });
  });

  it('responds with correct status code', (done) => {
    request('http://localhost:7865/login', (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(404);
        done();
      }
    });
  });

  it('responds with correct result', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, (error, response, body) => {
      if (error) done(error);
      else {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    });
  });

  it('responds with correct status code', (done) => {
    request.post('http://localhost:7865/login', { json: { userName: 'Betty' } }, (error, response, body) => {
      if (error) done(error);
      else {
        expect(response.statusCode).to.equal(200);
        done();
      }
    });
  });

});
