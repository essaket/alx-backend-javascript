/**
 * 9. Regex integration testing
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (isNaN(req.params.id) || !Number.isInteger(+req.params.id)) {
    res.status(404).send('Cart ID is not a number');
  } else {
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
