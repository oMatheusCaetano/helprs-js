/**
 * Returns the first character of the given value.
 * - If the value is an empty string, it will return an empty string.
 * - If the value is a boolean, it return 't' for `true` and 'f' for `false`.	
 * - If the value is an array, it will return the first element of the array and null if the array is empty.
 * - If the value is an object with at least one key, it will return the value of the first key in the object.
 * - If the value is empty (not string) or not of a supported type, it will return null.
 */
function first(value) {
  if (typeof value === 'string') return value.charAt(0);
  if (typeof value === 'number') return Number(`${value}`.charAt(0));
  if (typeof value === 'boolean') return `${value}`.charAt(0);
  if (Array.isArray(value)) return value[0] ?? null;
  if (!!value && typeof value === 'object' && Object.keys(value).length) {
    const firstKey = Object.keys(value)[0];
    return value[firstKey];
  };
  return null;
}

/**
 * Returns the last character of the given value.
 * - If the value is an empty string, it will return an empty string.
 * - If the value is a boolean, it will return 'e'.	
 * - If the value is an array, it will return the last element of the array and null if the array is empty.
 * - If the value is an object with at least one key, it will return the value of the last key in the object.
 * - If the value is empty (not string) or not of a supported type, it will return null.
 */
function last(value) {
  if (typeof value === 'string') return value.charAt(value.length - 1);
  if (typeof value === 'number') return Number(`${value}`.charAt(`${value}`.length - 1));
  if (typeof value === 'boolean') return 'e';
  if (Array.isArray(value)) return value[value.length - 1] ?? null;
  if (!!value && typeof value === 'object' && Object.keys(value).length) {
    const lastKey = Object.keys(value)[Object.keys(value).length - 1];
    return value[lastKey];
  };
  return null;
}

/**
 * Generates a unique ID.
 */
function uniqId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Generates a unique identifier in UUID format.
 */
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
  });
};

module.exports = {
  first,
  last,
  uniqId,
  uuid,
}
