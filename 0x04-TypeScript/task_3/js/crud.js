// Insert a row and return a random ID
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

// Delete a row by ID
export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

// Update a row by ID and return the ID
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
