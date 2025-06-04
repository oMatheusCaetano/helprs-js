/**
 * Returns the first portion of the given value, depending on its type.
 *
 * Behavior by type:
 * - **String**: Returns the first character, or the first `amount` characters if specified.
 * - **Number**: Returns the first digit(s) of the number. Preserves the negative sign for negative numbers.
 * - **Boolean**: Returns `'t'` for `true` and `'f'` for `false`.
 * - **Array**: Returns the first element, or the first `amount` elements if specified.
 * - **Object**: Returns the value of the first key, or an array of values for the first `amount` keys.
 * - **Other / empty values**: Returns `null`.
 *
 * @param {*} value - The input value to extract the first part from.
 * @param {Object} [options] - Optional settings.
 * @param {number} [options.amount] - If specified, returns the first `amount` characters/elements/values.
 * @returns {*} The extracted portion of the value based on its type and the `amount` option.
 *
 * @example
 * first('Hello'); // 'H'
 * first('Hello', { amount: 3 }); // 'Hel'
 *
 * first(12345); // 1
 * first(-9876, { amount: 2 }); // -98
 *
 * first(true); // 't'
 * first(false); // 'f'
 *
 * first([1, 2, 3]); // 1
 * first([1, 2, 3], { amount: 2 }); // [1, 2]
 *
 * first({ a: 'x', b: 'y' }); // 'x'
 * first({ a: 'x', b: 'y' }, { amount: 2 }); // ['x', 'y']
 *
 * first([]); // null
 * first({}); // null
 * first(null); // null
 */
export function first<
  T, 
  R = 
  T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends Array<infer U>
  ? U
  : T extends object
  ? T[keyof T]
  : null
  >(str: T, options?: {
    amount?: number;
  }): R;

/**
 * Returns the last portion of the given value, depending on its type.
 *
 * Behavior by type:
 * - **String**: Returns the last character, or the last `amount` characters if specified.
 * - **Number**: Returns the last digit(s) as a positive number (ignores minus sign).
 * - **Boolean**: Always returns `'e'` (from `'true'` or `'false'`).
 * - **Array**: Returns the last element, or the last `amount` elements if specified.
 * - **Object**: Returns the value of the last key, or an array of values from the last `amount` keys.
 * - **Other / empty values**: Returns `null`.
 *
 * @param {*} value - The input value to extract the last part from.
 * @param {{ amount?: number }} [options] - Optional settings.
 * @returns {*} The extracted portion of the value.
 *
 * @example
 * last('hello'); // 'o'
 * last('hello', { amount: 2 }); // 'lo'
 *
 * last(12345); // 5
 * last(12345, { amount: 3 }); // 345
 * last(-6789); // 9
 * last(-6789, { amount: 2 }); // 89
 *
 * last([1, 2, 3]); // 3
 * last([1, 2, 3], { amount: 2 }); // [2, 3]
 *
 * last({ a: 'x', b: 'y', c: 'z' }); // 'z'
 * last({ a: 'x', b: 'y', c: 'z' }, { amount: 2 }); // ['y', 'z']
 *
 * last(true); // 'e'
 * last(null); // null
 */
export function last<
  T, 
  R = 
  T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends Array<infer U>
  ? U
  : T extends object
  ? T[keyof T]
  : null
  >(str: T, options?: {
    amount?: number;
  }): R;

/**
 * Removes the first portion of a given value.
 * - If the value is a number, removes the first digit(s) and returns a number.
 * - If the value is a string, removes the first character(s) and returns the substring.
 * - If the value is an array, removes the first element(s) and returns a new array.
 * - If the value is an object, removes the first key(s) and returns a new object.
 *
 * @param {string | number | any[] | object} value - The input value.
 * @param {{ amount?: number }} [options] - Optional settings to control how many units to remove.
 * @returns {string | number | any[] | object | null} The value without the first portion.
 *
 * @example
 * removeFirst('hello'); // 'ello'
 * removeFirst('hello', { amount: 2 }); // 'llo'
 * removeFirst(12345); // 2345
 * removeFirst(12345, { amount: 3 }); // 45
 * removeFirst([1, 2, 3]); // [2, 3]
 * removeFirst([1, 2, 3], { amount: 2 }); // [3]
 * removeFirst({ a: 1, b: 2, c: 3 }); // { b: 2, c: 3 }
 * removeFirst({ a: 1, b: 2, c: 3 }, { amount: 2 }); // { c: 3 }
 */
export function removeFirst<T = number | string | any[] | object>(
  value: T,
  options?: { amount?: number }
): string | number | any[] | object | null;

/**
 * Removes the last portion of a given value.
 * - If the value is a number, removes the last digit(s) and returns a number.
 * - If the value is a string, removes the last character(s) and returns the substring.
 * - If the value is an array, removes the last element(s) and returns a new array.
 * - If the value is an object, removes the last key(s) and returns a new object.
 *
 * @param {string | number | any[] | object} value - The input value.
 * @param {{ amount?: number }} [options] - Optional settings to control how many units to remove.
 * @returns {string | number | any[] | object | null} The value without the last portion.
 *
 * @example
 * removeLast('hello'); // 'hell'
 * removeLast('hello', { amount: 2 }); // 'hel'
 * removeLast(12345); // 1234
 * removeLast(12345, { amount: 3 }); // 12
 * removeLast([1, 2, 3]); // [1, 2]
 * removeLast([1, 2, 3], { amount: 2 }); // [1]
 * removeLast({ a: 1, b: 2, c: 3 }); // { a: 1, b: 2 }
 * removeLast({ a: 1, b: 2, c: 3 }, { amount: 2 }); // { a: 1 }
 */
export function removeLast<T = number | string | any[] | object>(
  value: T,
  options?: { amount?: number }
): string | number | any[] | object | null;

/**
 * Generates a unique random ID string.
 * Uses random base-36 strings concatenated to increase uniqueness.
 *
 * @returns {string} A unique random string ID.
 *
 * @example
 * uniqId(); // '4g7k1z0a3p9h5x7'
 */
export function uniqId(): string;

/**
 * Generates a RFC4122 version 4 UUID.
 *
 * @returns {string} A UUID string in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
 *
 * @example
 * uuid(); // '3f9d7b7e-9c1a-4f7d-8a2b-1c2e3f4d5a6b'
 */
export function uuid(): string;

/**
 * Concatenates multiple path segments into a normalized single path.
 * - Removes duplicate slashes.
 * - Trims leading/trailing slashes from segments.
 * - Joins segments with a single slash.
 *
 * @param {...string} paths - The path segments to join.
 * @returns {string} The concatenated path.
 *
 * @example
 * concatPath('/foo/', '/bar', 'baz/'); // 'foo/bar/baz'
 * concatPath('///a', 'b//c/', '/d/'); // 'a/b/c/d'
 */
export function concatPath(...paths: (string | number)[]): string;

/**
 * Removes all non-numeric characters from a string.
 *
 * @param {string} value - The input string.
 * @returns {string} The string containing only numeric characters.
 *
 * @example
 * removeNonNumbers('Phone: +1 (234) 567-8900'); // '12345678900'
 * removeNonNumbers('abc123def'); // '123'
 */
export function removeNonNumbers(value?: string): string;

/**
 * Concatenates and deduplicates Tailwind CSS class names.
 * Supports multiple arguments, arrays, and nested arrays of strings.
 *
 * @param {...(string|string[]|number|number[]|null|null[]|undefined|undefined[])} args - Class names or arrays of class names.
 * @returns {string} The merged, sorted, and deduplicated class names.
 *
 * @example
 * tw('bg-red-500', 'text-white', ['p-4', 'm-2']); // 'bg-red-500 m-2 p-4 text-white'
 */
export function tw(...args: (string | string[] | number | number[] | null | null[] | undefined | undefined[])[]): string;

/**
 * Extracts values from a list of objects based on a specified key.
 * Returns an array of values corresponding to the given key.
 * 
 * If the key does not exist in an object or its value is null, it will not be included in the result.
 * 
 * @param {T[]} listOfObjects - An array of objects to extract values from.
 * @param {keyof T} key - The key whose values will be extracted from each object.
 * @returns {ValueOf<keyof T>[]} An array of values corresponding to the specified key.
 * @param {Object} [options] - Optional settings.
 * @param {boolean | RemoveDuplicatesOptions} [options.removeDuplicates] - If true, removes duplicate values from the result.
 *  Check `removeDuplicates` for more details on how duplicates are removed.
 * 
 * @example
 * const data = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
 * const names = keyValues(data, 'name'); // ['Alice', 'Bob']
 * const ages = keyValues(data, 'age'); // [30, 25]
 */
export function keyValues<T extends Record<string, any>>(listOfObjects: T[], key: keyof T, options: {
  removeDuplicates?: boolean | RemoveDuplicatesOptions;
}): ValueOf<keyof T>[];

type RemoveDuplicatesOptions = {
  /** Type of equality check: `loose` [==] (default) or `strict` [===]. **/
  equality?: 'loose' | 'strict';
};

/**
 * Removes duplicate values from a given value based on its type.
 * - **String**: Removes duplicate characters.
 * - **Array**: Removes duplicate elements.
 * 
 * @param {T} value - The input value to remove duplicates from.
 * @returns {R} The value with duplicates removed, or `null` if the type is unsupported.
 * @param {Object} [options] - Optional settings.
 * @param {string} [options.equality] - Type of equality check: `loose` [==] (default) or `strict` [===].
 */
export function removeDuplicates<
  T, 
  R = 
  T extends string
  ? string
  : T extends Array<infer U>
  ? U
  : null
  >(value: T, options?: RemoveDuplicatesOptions): R;
