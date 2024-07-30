export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw new Error('Position outside range');
  const int8DataView = new DataView(new ArrayBuffer(length));
  int8DataView.setInt8(position, value);
  return int8DataView;
}
