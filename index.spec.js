const { first, last, uniqId, uuid } = require('.');

describe('first', () => {
  test('Returns empty string for empty string input', () => {
    expect(first('')).toBe('');
  });

  test('Returns first character for boolean input', () => {
    expect(first(true)).toBe('t');
    expect(first(false)).toBe('f');
  });

  test('Returns first element for array input', () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first([55, 2, 3])).toBe(55);
  });

  test('Returns null for empty array input', () => {
    expect(first([])).toBeNull();
  });

  test('Returns value of first key for object input', () => {
    expect(first({ key1: 'value1', key2: 'value2' })).toBe('value1');
    expect(first({ key2: 'value2', key1: 'value1' })).toBe('value2');
  });

  test('Returns null for empty object input', () => {
    expect(first({})).toBeNull();
  });

  test('Returns first character for number input', () => {
    expect(first(123)).toBe(1);
    expect(first(876)).toBe(8);
  });

  test('Returns null for null, undefined, and missing input', () => {
    expect(first(null)).toBeNull();
    expect(first(undefined)).toBeNull();
    expect(first()).toBeNull();
  });
});


describe('last', () => {
  // Test case for an empty string
  test('returns an empty string for an empty string input', () => {
    expect(last('')).toBe('');
  });

  // Test case for a boolean value
  test("returns 'e' for a boolean value", () => {
    expect(last(true)).toBe('e');
    expect(last(false)).toBe('e');
  });

  // Test case for an array
  test('returns the last element of the array or null for an empty array', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([])).toBeNull();
  });

  // Test case for an object
  test('returns the value of the last key in the object', () => {
    expect(last({ a: 1, b: 2, c: 3 })).toBe(3);
    expect(last({})).toBeNull();
  });

  // Test case for unsupported types or empty values
  test('returns null for unsupported types or empty values', () => {
    expect(last(null)).toBeNull();
    expect(last(undefined)).toBeNull();
    expect(last(123)).toBe(3);
    expect(last({ a: 1 })).toBe(1);
  });
});

describe('uniqId', () => {
  test('generates a unique ID', () => {
    const id = uniqId();
    expect(typeof id).toBe('string');
    expect(id.length).toBe(21);
  });
});


describe('uuid', () => {
  it('should generate a unique identifier in UUID format', () => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid()).toMatch(uuidRegex);
    expect(uuid()).toMatch(uuidRegex);
  });
});