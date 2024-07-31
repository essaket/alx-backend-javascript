/* Define an interface for a Teacher */
export interface Teacher {
  readonly firstName: string; /* First name of the teacher (read-only) */
  readonly lastName: string;  /* Last name of the teacher (read-only) */
  fullTimeEmployee: boolean;  /* Whether the teacher is a full-time employee */
  yearsOfExperience?: number; /* Optional years of experience of the teacher */
  location: string;           /* Location of the teacher */
  [key: string]: unknown;     /* Allows additional properties with unknown types */
}

/* Extend the Teacher interface to include Directors */
export interface Directors extends Teacher {
  numberOfReports: number; /* Number of reports a director handles */
}

/* Define a type for a function that prints a teacher's name */
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/* Implement the printTeacher function */
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`; /* Print first initial and last name */
};

/* Interface for a Student class constructor */
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

/* Interface for the Student class methods */
export interface StudentClassInterface {
  workOnHomework(): string; /* Method to indicate working on homework */
  displayName(): string;    /* Method to display the student's first name */
}

/* Implement the StudentClass based on the StudentClassInterface */
export class StudentClass implements StudentClassInterface {
  constructor(
    public firstName: string,  /* First name of the student */
    public lastName: string,   /* Last name of the student */
  ) {}

  /* Method indicating the student is working on homework */
  workOnHomework(): string {
    return 'Currently working';
  }

  /* Method to display the student's first name */
  displayName(): string {
    return this.firstName;
  }
}
