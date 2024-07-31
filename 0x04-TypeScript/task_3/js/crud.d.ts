// Import RowID and RowElement types from the 'interface' module
import { RowID, RowElement } from './interface';

// Function to insert a row and return a unique ID
export function insertRow(row: RowElement): number;

// Function to delete a row by its ID
export function deleteRow(rowId: RowID): void;

// Function to update a row by its ID
export function updateRow(rowId: RowID, row: RowElement): void;
