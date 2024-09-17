/**
 * 6. Create a small HTTP server using Express
 */
const express = require('express');// Import the Express framework

const app = express();// Create an instance of the Express application

// Define a route for the root URL ('/') that responds with "Hello Holberton School!"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');// Send response when this route is accessed
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');// Log a message when the server starts
});

module.exports = app;// Export the app instance for use in other modules
