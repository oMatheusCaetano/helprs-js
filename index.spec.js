const {
  first,
  last,
  uniqId,
  uuid,
  removeFirst,
  removeLast,
  concatPath,
  removeNonNumbers,
  tw,
  keyValues,
  removeDuplicates,
  formatCnpjCpf,
  groupBy
} = require('.');

describe('first', () => {
  test('Returns empty string for empty string input', () => {
    expect(first('')).toBe('');
  });

  test('Returns first characters of string with amount', () => {
    expect(first('Hello World', { amount: 3 })).toBe('Hel');
    expect(first('A', { amount: 5 })).toBe('A');
  });

  test('Returns first digit(s) of number', () => {
    expect(first(123)).toBe(1);
    expect(first(-123)).toBe(-1);
    expect(first(9876, { amount: 2 })).toBe(98);
    expect(first(-9876, { amount: 2 })).toBe(-98);
  });

  test('Returns first character for boolean input', () => {
    expect(first(true)).toBe('t');
    expect(first(false)).toBe('f');
  });

  test('Returns first element for array input', () => {
    expect(first([1, 2, 3])).toBe(1);
    expect(first([55, 2, 3])).toBe(55);
  });

  test('Returns sliced array with amount', () => {
    expect(first([10, 20, 30], { amount: 2 })).toEqual([10, 20]);
    expect(first([5], { amount: 3 })).toEqual([5]);
  });

  test('Returns null for empty array input', () => {
    expect(first([])).toBeNull();
  });

  test('Returns value of first key for object input', () => {
    expect(first({ key1: 'value1', key2: 'value2' })).toBe('value1');
    expect(first({ key2: 'value2', key1: 'value1' })).toBe('value2');
  });

  test('Returns first N values of object with amount', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(first(obj, { amount: 2 })).toEqual([1, 2]);
    expect(first({ x: 'X' }, { amount: 5 })).toEqual(['X']);
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
  test('returns an empty string for an empty string input', () => {
    expect(last('')).toBe('');
  });

  test("returns 'e' for a boolean value", () => {
    expect(last(true)).toBe('e');
    expect(last(false)).toBe('e');
  });

  test('returns the last element of the array or null for an empty array', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([], { amount: 2 })).toBeNull();
    expect(last([1, 2, 3], { amount: 2 })).toEqual([2, 3]);
  });

  test('returns the value of the last key in the object', () => {
    expect(last({ a: 1, b: 2, c: 3 })).toBe(3);
    expect(last({ a: 1, b: 2, c: 3 }, { amount: 2 })).toEqual([2, 3]);
    expect(last({})).toBeNull();
  });

  test('returns the last digit(s) for numbers (positive and negative)', () => {
    expect(last(123)).toBe(3);
    expect(last(9876, { amount: 2 })).toBe(76);
    expect(last(-456)).toBe(6);
    expect(last(-98765, { amount: 3 })).toBe(765); // Sem sinal
  });

  test('returns the last character(s) of a string', () => {
    expect(last('hello')).toBe('o');
    expect(last('hello', { amount: 2 })).toBe('lo');
    expect(last('a', { amount: 2 })).toBe('a');
  });

  test('returns null for unsupported or missing values', () => {
    expect(last(null)).toBeNull();
    expect(last(undefined)).toBeNull();
    expect(last()).toBeNull();
  });

  it('should return the original value when amount is 0', () => {
    expect(removeLast('hello', { amount: 0 })).toBe('hello');
    expect(removeLast(12345, { amount: 0 })).toBe(12345);
    expect(removeLast([1, 2, 3], { amount: 0 })).toEqual([1, 2, 3]);
    expect(removeLast({ a: 1, b: 2 }, { amount: 0 })).toEqual({ a: 1, b: 2 });
  });
});

describe('uniqId', () => {
  test('generates a unique ID', () => {
    const id = uniqId();
    expect(typeof id).toBe('string');
  });
});

describe('uuid', () => {
  it('should generate a unique identifier in UUID format', () => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid()).toMatch(uuidRegex);
    expect(uuid()).toMatch(uuidRegex);
  });
});

describe('removeFirst', () => {
  it('should remove the first character from a string', () => {
    const result = removeFirst('hello');
    expect(result).toBe('ello');
  });

  it('should remove the first character from a number', () => {
    const result = removeFirst(12345);
    expect(result).toBe(2345);
  });

  it('should return an empty string if the value is an empty string', () => {
    const result = removeFirst('');
    expect(result).toBe('');
  });

  it('should return the same value if the value has only one character', () => {
    const result = removeFirst('a');
    expect(result).toBe('');
  });

  it('should remove the first character from an array', () => {
    const result = removeFirst([1,2,3]);
    expect(result).toEqual([2,3]);

    const result2 = removeFirst([]);
    expect(result2).toEqual([]);
  });

  it('should remove the first digits of a number with amount', () => {
    expect(removeFirst(12345, { amount: 2 })).toBe(345);
  });

  it('should remove the first elements of an array with amount', () => {
    expect(removeFirst([1, 2, 3, 4], { amount: 2 })).toEqual([3, 4]);
  });

  it('should remove the first keys of an object with amount', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(removeFirst(obj, { amount: 2 })).toEqual({ c: 3 });
  });

  it('should return the original value when amount is 0', () => {
    expect(removeFirst('hello', { amount: 0 })).toBe('hello');
    expect(removeFirst(12345, { amount: 0 })).toBe(12345);
    expect(removeFirst([1, 2, 3], { amount: 0 })).toEqual([1, 2, 3]);
    expect(removeFirst({ a: 1, b: 2 }, { amount: 0 })).toEqual({ a: 1, b: 2 });
  });
});

describe('removeLast', () => {
  it('should remove the last characters of a string with amount', () => {
    expect(removeLast('hello', { amount: 2 })).toBe('hel');
  });

  it('should remove the last digits of a number with amount', () => {
    expect(removeLast(12345, { amount: 2 })).toBe(123);
  });

  it('should remove the last elements of an array with amount', () => {
    expect(removeLast([1, 2, 3, 4], { amount: 2 })).toEqual([1, 2]);
  });

  it('should remove the last keys of an object with amount', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(removeLast(obj, { amount: 2 })).toEqual({ a: 1 });
  });

  it('should return the original value when amount is 0', () => {
    expect(removeLast('hello', { amount: 0 })).toBe('hello');
    expect(removeLast(12345, { amount: 0 })).toBe(12345);
    expect(removeLast([1, 2, 3], { amount: 0 })).toEqual([1, 2, 3]);
    expect(removeLast({ a: 1, b: 2 }, { amount: 0 })).toEqual({ a: 1, b: 2 });
  });
});

describe('concatPath', () => {
  test('should concatenate path segments correctly', () => {
    const result = concatPath('/path1', 'path2/', '/path3/');
    expect(result).toBe('path1/path2/path3');
  });

  test('should return empty string if no path segments are provided', () => {
    const result = concatPath();
    expect(result).toBe('');
  });

  test('should handle empty path segments correctly', () => {
    const result = concatPath('/path1', '', 'path2/');
    expect(result).toBe('path1/path2');
  });

  test('should handle empty path segments correctly', () => {
    const result = concatPath('///path1', '', 'asd', ' /asd/ ', '//asd', 'asd//', '//path2//');
    expect(result).toBe('path1/asd/asd/asd/asd/path2');
  });
});

describe('tw', () => {
  test('Should concatenate classes.', () => {
    const result = tw('bg-primary border-b  bg-primary', 'bg-primary border-b  bg-primary');
    const expected = ['border-b', 'bg-primary'];
    const resultSet = new Set(result.split(/\s+/));
    expect(resultSet).toEqual(new Set(expected));
  });

  test('Should support deeply nested arrays of classes.', () => {
    const result = tw('text-red', ['bg-white', ['m-4', ['p-2']]]);
    const expected = ['text-red', 'bg-white', 'm-4', 'p-2'];
    const resultSet = new Set(result.split(/\s+/));
    expect(resultSet).toEqual(new Set(expected));
  });

  test('Should handle falsy values like null, undefined, empty string, and 0', () => {
    const result = tw(null, undefined, '', 0, 'text-blue', ['bg-red']);
    const expected = ['text-blue', 'bg-red'];
    const resultSet = new Set(result.split(/\s+/));
    expect(resultSet).toEqual(new Set(expected));
  });
});

describe('removeNonNumbers', () => {
  test('removes non-numeric characters from a string', () => {
    expect(removeNonNumbers('Phone: +1 (234) 567-8900')).toBe('12345678900');
    expect(removeNonNumbers('abc123def')).toBe('123');
    expect(removeNonNumbers('$1,000.50')).toBe('100050');
  });

  test('returns empty string for falsy or undefined input', () => {
    expect(removeNonNumbers('')).toBe('');
    expect(removeNonNumbers()).toBe('');
    expect(removeNonNumbers(null)).toBe('');
    expect(removeNonNumbers(undefined)).toBe('');
  });

  test('converts numbers to numeric string', () => {
    expect(removeNonNumbers(123456)).toBe('123456');
    expect(removeNonNumbers(-789)).toBe('789');
  });

  test('removes unicode and non-breaking spaces', () => {
    expect(removeNonNumbers('1\u00A02\u20073')).toBe('123');
  });

  test('removes non-numeric characters from array of strings', () => {
    expect(removeNonNumbers(['a1b2', '3c4'])).toEqual(['12', '34']);
    expect(removeNonNumbers(['', 'abc'])).toEqual(['', '']);
  });

  test('returns empty array for empty input array', () => {
    expect(removeNonNumbers([])).toEqual([]);
  });
});

describe('keyValues', () => {
  test('extracts values for a given key from an array of objects', () => {
    const data = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 40 }
    ];
    expect(keyValues(data, 'name')).toEqual(['Alice', 'Bob', 'Charlie']);
    expect(keyValues(data, 'age')).toEqual([30, 25, 40]);
  });

  test('returns an empty array for an empty list', () => {
    expect(keyValues([], 'name')).toEqual([]);
  });

  test('does not return null and undefined values', () => {
    const data = [
      { name: 'Alice' },
      { age: 25 },
      { age: 50, name: null },
      { name: 'Charlie', age: 40 }
    ];
    expect(keyValues(data, 'name')).toEqual(['Alice', 'Charlie']);
    expect(keyValues(data, 'age')).toEqual([25, 50, 40]);
  });

  test('works with different value types', () => {
    const data = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true }
    ];
    expect(keyValues(data, 'active')).toEqual([true, false, true]);
  });

  test('removes duplicates if option removeDuplicates is true', () => {
    const duplicateData = [
      { key: 'a' },
      { key: 'b' },
      { key: 'a' },
      { key: 'c' },
      { key: 'b' }
    ];
    expect(keyValues(duplicateData, 'key', { removeDuplicates: true })).toEqual(['a', 'b', 'c']);
  });

  test('removes duplicates with options object', () => {
    const duplicateData = [
      { key: '1' },
      { key: 1 },
      { key: '2' },
      { key: 2 },
      { key: '1' }
    ];
    expect(keyValues(duplicateData, 'key', { removeDuplicates: { equality: 'strict' } })).toEqual(['1', 1, '2', 2]);
  });

  test('returns values as is if removeDuplicates is false or not provided', () => {
    const dataNoDup = [
      { val: 1 },
      { val: 2 },
      { val: 1 },
      { val: 3 }
    ];
    expect(keyValues(dataNoDup, 'val')).toEqual([1, 2, 1, 3]);
    expect(keyValues(dataNoDup, 'val', { removeDuplicates: false })).toEqual([1, 2, 1, 3]);
  });
});

describe('removeDuplicates', () => {
  test('removes duplicate characters from a string', () => {
    expect(removeDuplicates('aabbcc')).toBe('abc');
    expect(removeDuplicates('abcabc')).toBe('abc');
    expect(removeDuplicates('')).toBe('');
  });

  test('removes duplicate elements from an array (loose equality)', () => {
    expect(removeDuplicates([1, '1', 2, 2, 3, '3', 3])).toEqual([1, 2, 3]);
    expect(removeDuplicates([false, 0, null, '', undefined])).toEqual([false, null]);
  });

  test('removes duplicate elements from an array (strict equality)', () => {
    expect(removeDuplicates([1, '1', 2, 2, 3, '3', 3], { equality: 'strict' }))
      .toEqual([1, '1', 2, 3, '3']);
    expect(removeDuplicates([false, 0, null, '', undefined], { equality: 'strict' }))
      .toEqual([false, 0, null, '', undefined]);
  });

  test('returns null for unsupported types', () => {
    expect(removeDuplicates(123)).toBeNull();
    expect(removeDuplicates({ a: 1 })).toBeNull();
    expect(removeDuplicates(null)).toBeNull();
    expect(removeDuplicates(undefined)).toBeNull();
  });
});

describe('formatCnpjCpf', () => {
  test('formats raw CPF string correctly', () => {
    expect(formatCnpjCpf('12345678909')).toBe('123.456.789-09');
  });

  test('returns already formatted CPF as-is', () => {
    expect(formatCnpjCpf('123.456.789-09')).toBe('123.456.789-09');
  });

  test('formats raw CNPJ string correctly', () => {
    expect(formatCnpjCpf('12345678000195')).toBe('12.345.678/0001-95');
  });

  test('returns already formatted CNPJ as-is', () => {
    expect(formatCnpjCpf('12.345.678/0001-95')).toBe('12.345.678/0001-95');
  });

  test('returns empty string for undefined or empty input', () => {
    expect(formatCnpjCpf(undefined)).toBe('');
    expect(formatCnpjCpf('')).toBe('');
  });

  test('returns unformatted input if length is not 11 or 14', () => {
    expect(formatCnpjCpf('123')).toBe('123');
    expect(formatCnpjCpf('abcdefg')).toBe('abcdefg');
  });

  test('formats an array of CNPJ/CPF strings', () => {
    const input = ['12345678000195', '12345678909'];
    const expected = ['12.345.678/0001-95', '123.456.789-09'];
    expect(formatCnpjCpf(input)).toEqual(expected);
  });

  test('formats an object with only CNPJ', () => {
    const input = { cnpj: '12345678000195' };
    const expected = { cnpj: '12.345.678/0001-95' };
    expect(formatCnpjCpf(input)).toEqual(expected);
  });

  test('formats an object with only CPF', () => {
    const input = { cpf: '12345678909' };
    const expected = { cpf: '123.456.789-09' };
    expect(formatCnpjCpf(input)).toEqual(expected);
  });

  test('formats an object with both CPF and CNPJ', () => {
    const input = { cpf: '12345678909', cnpj: '12345678000195' };
    const expected = { cpf: '123.456.789-09', cnpj: '12.345.678/0001-95' };
    expect(formatCnpjCpf(input)).toEqual(expected);
  });

  test('formats an array of objects with CNPJ/CPF', () => {
    const input = [
      { cnpj: '12345678000195' },
      { cpf: '12345678909' },
      { cpf: '12345678909', cnpj: '12345678000195' }
    ];
    const expected = [
      { cnpj: '12.345.678/0001-95' },
      { cpf: '123.456.789-09' },
      { cpf: '123.456.789-09', cnpj: '12.345.678/0001-95' }
    ];
    expect(formatCnpjCpf(input)).toEqual(expected);
  });
});

describe('groupBy', () => {
  it('groups objects by a string key', () => {
    const data = [
      { id: 1, category: 'A', value: 10 },
      { id: 2, category: 'B', value: 20 },
      { id: 3, category: 'A', value: 30 },
      { id: 4, category: 'B', value: 40 }
    ];
    const result = groupBy(data, 'category');
    expect(result).toEqual({
      A: [
        { id: 1, category: 'A', value: 10 },
        { id: 3, category: 'A', value: 30 }
      ],
      B: [
        { id: 2, category: 'B', value: 20 },
        { id: 4, category: 'B', value: 40 }
      ]
    });
  });

  it('groups objects by a numeric key', () => {
    const data = [
      { id: 1, value: 10 },
      { id: 2, value: 10 },
      { id: 3, value: 20 }
    ];
    const result = groupBy(data, 'value');
    expect(result).toEqual({
      10: [
        { id: 1, value: 10 },
        { id: 2, value: 10 }
      ],
      20: [
        { id: 3, value: 20 }
      ]
    });
  });

  it('returns an empty object for an empty array', () => {
    expect(groupBy([], 'id')).toEqual({});
  });

  it('handles objects with missing keys gracefully', () => {
    const data = [
      { id: 1, type: 'x' },
      { id: 2 },
      { id: 3, type: 'x' }
    ];
    const result = groupBy(data, 'type');
    expect(result).toEqual({
      x: [
        { id: 1, type: 'x' },
        { id: 3, type: 'x' }
      ],
      undefined: [{ id: 2 }]
    });
  });

  it('groups by boolean key', () => {
    const data = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true }
    ];
    const result = groupBy(data, 'active');
    expect(result).toEqual({
      true: [
        { id: 1, active: true },
        { id: 3, active: true }
      ],
      false: [
        { id: 2, active: false }
      ]
    });
  });
});
