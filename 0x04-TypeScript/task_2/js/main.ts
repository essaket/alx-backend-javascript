/* Define an interface for a Director */
export interface DirectorInterface {
  workFromHome(): string;     /* Method to indicate working from home */
  getCoffeeBreak(): string;   /* Method to indicate taking a coffee break */
  workDirectorTasks(): string; /* Method to indicate performing director tasks */
}

/* Define an interface for a Teacher */
export interface TeacherInterface {
  workFromHome(): string;     /* Method to indicate working from home */
  getCoffeeBreak(): string;   /* Method to indicate taking a coffee break */
  workTeacherTasks(): string; /* Method to indicate performing teacher tasks */
}

/* Define a class for a Director that implements the DirectorInterface */
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home'; /* Director's work from home method */
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break'; /* Director's coffee break method */
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks'; /* Director's work tasks method */
  }
}

/* Define a class for a Teacher that implements the TeacherInterface */
export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home'; /* Teacher's work from home method */
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break'; /* Teacher's coffee break method */
  }
  workTeacherTasks(): string {
    return 'Getting to work'; /* Teacher's work tasks method */
  }
}

/* Function to create an employee. If the salary is less than 500,
  it creates a Teacher. Otherwise, it creates a Director. */
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher(); /* Creates a Teacher if salary is less than 500 */
  }
  return new Director(); /* Creates a Director otherwise */
}

/* Type predicate function to check if an employee is a Director */
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

/* Function to execute work. If the employee is a Director,
  it executes workDirectorTasks. Otherwise, it executes workTeacherTasks. */
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks(); /* Executes Director's tasks */
  }
  return employee.workTeacherTasks(); /* Executes Teacher's tasks */
}

/* Define a type for Subjects */
export type Subjects = 'Math' | 'History';

/* Function to teach a class. If the class is Math, it returns 'Teaching Math'.
  Otherwise, it returns 'Teaching History'. */
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math'; /* Returns 'Teaching Math' if subject is Math */
  }
  return 'Teaching History'; /* Returns 'Teaching History' otherwise */
}
