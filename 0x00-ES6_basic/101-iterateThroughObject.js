export default function iterateThroughObject(reportWithIterator) {
  /* Other answer
   * return newArray.from(reportWithIterator).join(' | ');
   */
  const returnValue = [];
  for (const report of reportWithIterator) {
    returnValue.push(report);
  }
  return returnValue.join(' | ');
}
