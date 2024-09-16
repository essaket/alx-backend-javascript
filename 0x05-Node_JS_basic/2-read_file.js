/**
 * 2. Reading a file synchronously with Node JS
 */
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously using UTF-8 encoding
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content into lines and filter out any empty lines (to handle blank entries)
    const lines = data.split('\n').filter((line) => line.trim());

    // Remove the header line (column names)
    lines.shift();

    // Initialize a counter to track the total number of students
    let numberOfStudents = 0;

    // Initialize an object to store the count and names of students in each field
    const fields = {};

    // Iterate over each line of student data
    lines.forEach((line) => {
      // Split the line by commas to extract individual fields (e.g., first name, field of study)
      const student = line.split(',');
      const firstName = student[0].trim(); // Get the student's first name
      const field = student[student.length - 1].trim(); // Get student's field (last column)

      // Increment the total number of students
      numberOfStudents += 1;

      // Initialize field with count and list if it doesn't exist
      if (!fields[field]) {
        fields[field] = { count: 0, firstNames: [] };
      }

      // Increment the count of students in this field and add the first name to the list
      fields[field].count += 1;
      fields[field].firstNames.push(firstName);
    });

    // Log the total number of students
    console.log(`Number of students: ${numberOfStudents}`);

    // Log the number of students and the list of first names for each field
    for (const [field, info] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${info.count}. List: ${info.firstNames.join(', ')}`);
    }
  } catch (error) {
    // If an error occurs (e.g., the file cannot be read), throw a custom error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
