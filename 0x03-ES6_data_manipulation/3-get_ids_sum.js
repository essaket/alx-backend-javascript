export default function getStudentIdsSum(arrayofObject) {
  return arrayofObject.reduce((sum, array) => sum + array.id, 0);
}
