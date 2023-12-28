const sut = require('.');

describe('first', () => {
  test('Should extract the first character from a string', () => {
    expect(sut.first('Hello World')).toBe('H');
    expect(sut.first(' Hello World')).toBe('H');
    expect(sut.first('  Hello World')).toBe('H');
    expect(sut.first('  hello World')).toBe('h');

    expect(sut.first('Hello World', { trim: true })).toBe('H');
    expect(sut.first(' Hello World', { trim: true })).toBe('H');
    expect(sut.first('  Hello World', { trim: true })).toBe('H');
    expect(sut.first('  hello World', { trim: true })).toBe('h');

    expect(sut.first('Hello World', { trim: false })).toBe('H');
    expect(sut.first(' Hello World', { trim: false })).toBe(' ');
    expect(sut.first('  Hello World', { trim: false })).toBe(' ');
    expect(sut.first('  hello World', { trim: false })).toBe(' ');
  });

  test('Should return an empty string if param is invalid', () => {
    expect(sut.first('')).toBe('');
    expect(sut.first(null)).toBe('');
    expect(sut.first(undefined)).toBe('');
    expect(sut.first('  ')).toBe('');

    expect(sut.first('', { trim: true })).toBe('');
    expect(sut.first(null, { trim: true })).toBe('');
    expect(sut.first(undefined, { trim: true })).toBe('');
    expect(sut.first('  ', { trim: true })).toBe('');

    expect(sut.first('', { trim: false })).toBe('');
    expect(sut.first(null, { trim: false })).toBe('');
    expect(sut.first(undefined, { trim: false })).toBe('');
  });
});

describe('removeFirst', () => {
  test('Should remove the first character from a string', () => {
    expect(sut.removeFirst('Hello World')).toBe('ello World');
    expect(sut.removeFirst(' Hello World')).toBe('ello World');
    expect(sut.removeFirst('  Hello World')).toBe('ello World');
    expect(sut.removeFirst('  hello World')).toBe('ello World');

    expect(sut.removeFirst('Hello World', { trim: true })).toBe('ello World');
    expect(sut.removeFirst(' Hello World', { trim: true })).toBe('ello World');
    expect(sut.removeFirst('  Hello World', { trim: true })).toBe('ello World');
    expect(sut.removeFirst('  hello World', { trim: true })).toBe('ello World');

    expect(sut.removeFirst('Hello World', { trim: false })).toBe('ello World');
    expect(sut.removeFirst(' Hello World', { trim: false })).toBe('Hello World');
    expect(sut.removeFirst('  Hello World', { trim: false })).toBe(' Hello World');
    expect(sut.removeFirst('  hello World', { trim: false })).toBe(' hello World');
  });

  test('Should return an empty string if param is invalid', () => {
    expect(sut.removeFirst('')).toBe('');
    expect(sut.removeFirst(null)).toBe('');
    expect(sut.removeFirst(undefined)).toBe('');
    expect(sut.removeFirst('  ')).toBe('');

    expect(sut.removeFirst('', { trim: true })).toBe('');
    expect(sut.removeFirst(null, { trim: true })).toBe('');
    expect(sut.removeFirst(undefined, { trim: true })).toBe('');
    expect(sut.removeFirst('  ', { trim: true })).toBe('');

    expect(sut.removeFirst('', { trim: false })).toBe('');
    expect(sut.removeFirst(null, { trim: false })).toBe('');
    expect(sut.removeFirst(undefined, { trim: false })).toBe('');
  });
});

describe('capitalizeFirst', () => {
  test('Should remove the first character from a string', () => {
    expect(sut.capitalizeFirst('Hello World')).toBe('Hello World');
    expect(sut.capitalizeFirst(' Hello World')).toBe('Hello World');
    expect(sut.capitalizeFirst('  Hello World')).toBe('Hello World');
    expect(sut.capitalizeFirst('  hello World')).toBe('Hello World');

    expect(sut.capitalizeFirst('Hello World', { trim: true })).toBe('Hello World');
    expect(sut.capitalizeFirst(' Hello World', { trim: true })).toBe('Hello World');
    expect(sut.capitalizeFirst('  Hello World', { trim: true })).toBe('Hello World');
    expect(sut.capitalizeFirst('  hello World', { trim: true })).toBe('Hello World');

    expect(sut.capitalizeFirst('hello World', { trim: false })).toBe('Hello World');
    expect(sut.capitalizeFirst(' hello World', { trim: false })).toBe(' hello World');
  });

  test('Should return an empty string if param is invalid', () => {
    expect(sut.capitalizeFirst('')).toBe('');
    expect(sut.capitalizeFirst(null)).toBe('');
    expect(sut.capitalizeFirst(undefined)).toBe('');
    expect(sut.capitalizeFirst('  ')).toBe('');

    expect(sut.capitalizeFirst('', { trim: true })).toBe('');
    expect(sut.capitalizeFirst(null, { trim: true })).toBe('');
    expect(sut.capitalizeFirst(undefined, { trim: true })).toBe('');
    expect(sut.capitalizeFirst('  ', { trim: true })).toBe('');

    expect(sut.capitalizeFirst('', { trim: false })).toBe('');
    expect(sut.capitalizeFirst(null, { trim: false })).toBe('');
    expect(sut.capitalizeFirst(undefined, { trim: false })).toBe('');
  });
});
