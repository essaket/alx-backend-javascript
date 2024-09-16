/**
 * 4. Create a small HTTP server using Node's HTTP module
 */
const { createServer } = require('http');

// Create an HTTP server
const app = createServer((req, res) => {
  // Set the response status code to 200 (OK)
  res.statusCode = 200;

  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body with the text "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  // Log a message to the console indicating that the server is running
  console.log('Server running at http://localhost:1245/');
});

// Export the server instance for use in other modules
module.exports = app;