// Define a type alias 'RowID' as a number
export type RowID = number;

/* 
Define an interface 'RowElement' that represents an element in a row.
It includes the following properties:
- firstName: a required string representing the first name
- lastName: a required string representing the last name
- age: an optional number representing the age
*/
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
