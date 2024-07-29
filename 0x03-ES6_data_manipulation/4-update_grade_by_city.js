export default function updateStudentGradeByCity(arrayofObject, city, newGrades) {
  return arrayofObject
    .filter((array) => array.location === city)
    .map((array) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === array.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return { ...array, grade };
    });
}
