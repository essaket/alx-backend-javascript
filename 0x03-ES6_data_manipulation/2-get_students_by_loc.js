export default function getStudentsByLocation(arrayofObject, city) {
  if (typeof city !== 'string') return 'City must be a string';
  return Array.isArray(arrayofObject)
    ? arrayofObject.filter((array) => array.location === city) : [];
}
