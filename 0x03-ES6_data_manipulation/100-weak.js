const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  if (weakMap.get(endPoint) + 1) {
    weakMap.set(endPoint, weakMap.get(endPoint) + 1);
  } else {
    weakMap.set(endPoint, 1);
  }
  if (weakMap.get(endPoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
  return weakMap;
}
