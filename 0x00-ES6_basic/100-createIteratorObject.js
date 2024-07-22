export default function* createIteratorObject(report) {
  for (const employees of Object.values(report.allEmployees)) {
    for (const employee of employees) {
      yield employee; // Yield each employee one by one
    }
  }
}
