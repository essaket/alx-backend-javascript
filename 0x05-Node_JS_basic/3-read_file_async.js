/**
 * 3. Reading a file asynchronously with Node JS
 */
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split data into lines and filter out empty ones
    const lines = data.split('\n').filter((line) => line.trim());

    // Remove header line
    lines.shift();

    // Initialize counters for total students and fields
    let numberOfStudents = 0;
    const fields = {};

    // Process each student line
    lines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0].trim();
      const field = student[student.length - 1].trim();

      // Increment total student count
      numberOfStudents += 1;

      // Track students by field
      if (!fields[field]) {
        fields[field] = { count: 0, firstNames: [] };
      }
      fields[field].count += 1;
      fields[field].firstNames.push(firstName);
    });

    // Log total number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Log student count and names by field
    for (const [field, info] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.firstNames.join(', ')}`);
    }
  } catch (error) {
    // Throw error if file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
