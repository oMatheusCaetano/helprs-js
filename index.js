/****
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
function first(value, options) {
  const amount = options?.amount;

  if (typeof value === 'string') {
    return amount ? value.slice(0, amount) : value.charAt(0);
  }

  if (typeof value === 'number') {
    const isNegative = value < 0;
    const str = Math.abs(value).toString();
    const sliced = amount ? str.slice(0, amount) : str.charAt(0);
    const result = Number(sliced);
    return isNaN(result) ? null : (isNegative ? -result : result);
  }

  if (typeof value === 'boolean') {
    return value ? 't' : 'f';
  }

  if (Array.isArray(value)) {
    return amount ? value.slice(0, amount) : (value[0] ?? null);
  }

  if (value !== null && typeof value === 'object') {
    const keys = Object.keys(value);
    if (!keys.length) return null;

    if (amount) {
      return keys.slice(0, amount).map(k => value[k]);
    }

    return value[keys[0]];
  }

  return null;
}

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
function last(value, options) {
  const amount = options?.amount;

  if (typeof value === 'string') {
    return amount ? value.slice(-amount) : value.charAt(value.length - 1);
  }

  if (typeof value === 'number') {
    const str = Math.abs(value).toString();
    const sliced = amount ? str.slice(-amount) : str.charAt(str.length - 1);
    const result = Number(sliced);
    return isNaN(result) ? null : result;
  }

  if (typeof value === 'boolean') {
    return 'e';
  }

  if (Array.isArray(value)) {
    if (!value.length) return null;
    return amount ? value.slice(-amount) : value[value.length - 1];
  }

  if (value !== null && typeof value === 'object') {
    const keys = Object.keys(value);
    if (!keys.length) return null;

    if (amount) {
      return keys.slice(-amount).map(k => value[k]);
    }

    const lastKey = keys[keys.length - 1];
    return value[lastKey];
  }

  return null;
}

/**
 * Removes the first portion of a given value based on its type.
 *
 * Behavior by type:
 * - **String**: Removes the first `amount` characters.
 * - **Number**: Removes the first `amount` digits. Result is a number or `null` if invalid.
 * - **Array**: Removes the first `amount` elements.
 * - **Object**: Removes the first `amount` keys and returns a new object.
 * - **Other types**: Returns `null`.
 *
 * @param {*} value - The value to process.
 * @param {{ amount?: number }} [options] - Optional settings.
 * @returns {*} The resulting value with the first portion removed.
 *
 * @example
 * removeFirst('hello'); // 'ello'
 * removeFirst('hello', { amount: 2 }); // 'llo'
 * removeFirst(12345); // 2345
 * removeFirst(12345, { amount: 2 }); // 345
 * removeFirst([1, 2, 3]); // [2, 3]
 * removeFirst([1, 2, 3], { amount: 2 }); // [3]
 * removeFirst({ a: 1, b: 2, c: 3 }); // { b: 2, c: 3 }
 * removeFirst({ a: 1, b: 2, c: 3 }, { amount: 2 }); // { c: 3 }
 */
function removeFirst(value, options) {
  const amount = options?.amount ?? 1;

  if (amount === 0) {
    return value;
  }

  if (typeof value === 'number') {
    const str = `${value}`;
    const result = Number(str.slice(amount));
    return isNaN(result) ? null : result;
  }

  if (typeof value === 'string') {
    return value.slice(amount);
  }

  if (Array.isArray(value)) {
    return value.slice(amount);
  }

  if (value !== null && typeof value === 'object') {
    const keys = Object.keys(value).slice(amount);
    const result = {};
    for (const key of keys) {
      result[key] = value[key];
    }
    return result;
  }

  return null;
}

/**
 * Removes the last portion of a given value based on its type.
 *
 * Behavior by type:
 * - **String**: Removes the last `amount` characters.
 * - **Number**: Removes the last `amount` digits. Result is a number or `null` if invalid.
 * - **Array**: Removes the last `amount` elements.
 * - **Object**: Removes the last `amount` keys and returns a new object.
 * - **Other types**: Returns `null`.
 *
 * @param {*} value - The value to process.
 * @param {{ amount?: number }} [options] - Optional settings.
 * @returns {*} The resulting value with the last portion removed.
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
function removeLast(value, options) {
  const amount = options?.amount ?? 1;

  if (amount === 0) {
    return value;
  }

  if (typeof value === 'number') {
    const str = `${Math.abs(value)}`;
    const sliced = str.slice(0, -amount);
    const result = Number(sliced);
    return isNaN(result) ? null : result;
  }

  if (typeof value === 'string') {
    return value.slice(0, -amount);
  }

  if (Array.isArray(value)) {
    return value.slice(0, -amount);
  }

  if (value !== null && typeof value === 'object') {
    const keys = Object.keys(value).slice(0, -amount);
    const result = {};
    for (const key of keys) {
      result[key] = value[key];
    }
    return result;
  }

  return null;
}

/**
 * Generates a unique random ID string.
 * Uses random base-36 strings concatenated to increase uniqueness.
 *
 * @returns {string} A unique random string ID.
 *
 * @example
 * uniqId(); // '4g7k1z0a3p9h5x7'
 */
function uniqId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Generates a RFC4122 version 4 UUID.
 *
 * @returns {string} A UUID string in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
 *
 * @example
 * uuid(); // '3f9d7b7e-9c1a-4f7d-8a2b-1c2e3f4d5a6b'
 */
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
  });
};

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
function concatPath(...paths) {
  let fullPath = '';

  paths.forEach((path) => {
    if (!path || !`${path}`?.trim()?.length) return;
    path = `${path}`.trim().replace(/[\/]+/g, '/');

    if (path.endsWith('/')) path = removeLast(path);
    if (path.startsWith('/')) path = removeFirst(path);

    fullPath = !!fullPath.length ? `${fullPath}/${path}` : path;
  });

  return fullPath;
}

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
function removeNonNumbers(value) {
  if (!value) return '';
  return `${value}`.replace(/\D/g, '');
}

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
function tw(...args) {
  const flat = args.flat(Infinity);

  const classes = flat
    .filter(Boolean)
    .flatMap(item => (typeof item === 'string' ? item.split(/\s+/) : []));

  return Array.from(new Set(classes)).join(' ');
}

/**
 * Extracts values from a list of objects based on a specified key.
 * Returns an array of values corresponding to that key.
 * 
 * If a key is missing or its value is `null` or `undefined` in an object,
 * that value will be excluded from the result.
 * 
 * Optionally, duplicate values can be removed by setting `removeDuplicates`.
 * 
 * @param {Object[]} listOfObjects - The array of objects to extract values from.
 * @param {string} key - The key whose values should be extracted from each object.
 * @param {Object} [options] - Optional settings.
 * @param {boolean | Object} [options.removeDuplicates] - If true or configured, removes duplicate values from the result.
 * 
 * @returns {any[]} An array of values for the specified key, optionally deduplicated.
 * 
 * @example
 * const data = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }];
 * const names = keyValues(data, 'name'); // ['Alice', 'Bob', 'Alice']
 * const uniqueNames = keyValues(data, 'name', { removeDuplicates: true }); // ['Alice', 'Bob']
 */
function keyValues(listOfObjects, key, options) {
  const data = listOfObjects
    .map(obj => obj[key])
    .filter(value => value !== null && value !== undefined);

    return options?.removeDuplicates 
      ?  removeDuplicates(
          data, 
          typeof options.removeDuplicates === 'object' ? options.removeDuplicates : undefined
        ) 
      : data;
}

function removeDuplicates(value, options = {}) {
  const { equality = 'loose' } = options;

  if (typeof value === 'string') {
    // Remove caracteres duplicados mantendo a ordem
    let seen = new Set();
    return [...value].filter(char => {
      if (seen.has(char)) return false;
      seen.add(char);
      return true;
    }).join('');
  }

  if (Array.isArray(value)) {
    let result = [];

    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      let isDuplicate = false;

      for (let j = 0; j < result.length; j++) {
        if (equality === 'strict' ? result[j] === item : result[j] == item) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) result.push(item);
    }

    return result;
  }

  return null;
}


/**
 * Formats a CPF or CNPJ number into a standardized string format.
 * - For strings: returns the formatted CPF or CNPJ.
 * - For arrays of strings: returns an array of formatted values.
 * - For objects with `cpf` or `cnpj` keys: returns a new object with those values formatted.
 * - For arrays of such objects: returns an array with each object having its CPF/CNPJ formatted.
 *
 * If the value is not a valid CPF or CNPJ (lengths 11 or 14), it is returned as-is.
 *
 * @param {string | string[] | object | object[]} value - The value(s) to format.
 * @returns {string | string[] | object | object[]} The formatted CPF/CNPJ value(s).
 *
 * @example
 * formatCnpjCpf('12345678000195'); // '12.345.678/0001-95'
 * formatCnpjCpf('12345678909'); // '123.456.789-09'
 * formatCnpjCpf(['12345678000195', '12345678909']); // ['12.345.678/0001-95', '123.456.789-09']
 * formatCnpjCpf({ cpf: '12345678909' }); // { cpf: '123.456.789-09' }
 * formatCnpjCpf({ cnpj: '12345678000195' }); // { cnpj: '12.345.678/0001-95' }
 * formatCnpjCpf([
 *   { cpf: '12345678909' },
 *   { cnpj: '12345678000195' },
 *   { cpf: '12345678909', cnpj: '12345678000195' }
 * ]); // [
 *   { cpf: '123.456.789-09' },
 *   { cnpj: '12.345.678/0001-95' },
 *   { cpf: '123.456.789-09', cnpj: '12.345.678/0001-95' }
 * ]
 */
function formatCnpjCpf(value) {
    if (value === undefined || value === '') return '';

  function _formatCnpjCpf_handleFormat(val) {
      if (value === undefined || value === '') return '';

    // Remove all non-numeric characters
    const sanitized = removeNonNumbers(val);

    // Check if it's a valid CNPJ (14 digits)
    if (sanitized.length === 14) {
      return sanitized.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    // Check if it's a valid CPF (11 digits)
    if (sanitized.length === 11) {
      return sanitized.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    // If not a valid CNPJ or CPF, return the original value
    return val;
  }

  function _formatCnpjCpf_handleObjectFormat(val) {
    if ('cpf' in val) val.cpf = _formatCnpjCpf_handleFormat(val.cpf);
    if ('cnpj' in val) val.cnpj = _formatCnpjCpf_handleFormat(val.cnpj);
    return val;
  }

  if (typeof value === 'string') {
    return _formatCnpjCpf_handleFormat(value);
  }

  if (Array.isArray(value)) {
    return value.map(item => {
      if (typeof item === 'string') return _formatCnpjCpf_handleFormat(item);
      if (typeof item === 'object') return _formatCnpjCpf_handleObjectFormat(item);
      return item; // Return as is if not a string or object
    });
  }

  if (typeof value === 'object' && value !== null) {
    return _formatCnpjCpf_handleObjectFormat(value);
  }

  return value;
}

module.exports = {
  concatPath,
  first,
  tw,
  removeFirst,
  removeLast,
  last,
  uniqId,
  uuid,
  removeNonNumbers,
  keyValues,
  removeDuplicates,
  formatCnpjCpf
}