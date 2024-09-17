/**
 * 5. Create a more complex HTTP server using Node's HTTP module
 */
const { createServer } = require('http');
const fs = require('fs').promises;

// Function to count students and fields from a CSV file
async function countStudents(path) {
  try {
    // Read file contents
    const data = await fs.readFile(path, 'utf8');

    // Split into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim());
    lines.shift(); // Remove header line

    // Initialize counters
    let numberOfStudents = 0;
    const fields = {};

    // Process each line
    lines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0].trim();
      const field = student[student.length - 1].trim();

      numberOfStudents += 1;

      if (!fields[field]) {
        fields[field] = { count: 0, firstNames: [] };
      }
      fields[field].count += 1;
      fields[field].firstNames.push(firstName);
    });

    // Prepare output
    let output = `Number of students: ${numberOfStudents}\n`;
    for (const [field, info] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${info.count}. List: ${info.firstNames.join(', ')}\n`;
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Create HTTP server
const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    let fileName = process.argv[2];
    if (!fileName) fileName = 'database.csv';
    await countStudents(fileName)
      .then((data) => res.end(data))
      .catch((err) => res.end(err.message));
  }
});

// Start server
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

// Export server
module.exports = app;
