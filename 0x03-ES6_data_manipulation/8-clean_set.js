export default function cleanset(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  const result = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length)); /* youn can change slice to substring */
    }
  }
  return result.join('-');
}
