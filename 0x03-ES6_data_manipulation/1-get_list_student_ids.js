export default function getListStudentIds(arrayofObject) {
  /* return Array.isArray(arrayofObject) ? arrayofObject.map((array) => array.id) : []; */
  return arrayofObject instanceof Array ? arrayofObject.map(({ id }) => id) : [];
}
