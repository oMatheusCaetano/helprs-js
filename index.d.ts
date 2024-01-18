/**
 * Returns the first character of the given value.
 * - If the value is an empty string, it will return an empty string.
 * - If the value is a boolean, it return 't' for `true` and 'f' for `false`.	
 * - If the value is an array, it will return the first element of the array and null if the array is empty.
 * - If the value is an object with at least one key, it will return the value of the first key in the object.
 * - If the value is empty (not string) or not of a supported type, it will return null.
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
  >(str: T): R;

/**
 * Returns the last character of the given value.
 * - If the value is an empty string, it will return an empty string.
 * - If the value is a boolean, it return 't' for `true` and 'f' for `false`.	
 * - If the value is an array, it will return the last element of the array and null if the array is empty.
 * - If the value is an object with at least one key, it will return the value of the last key in the object.
 * - If the value is empty (not string) or not of a supported type, it will return null.
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
  >(str: T): R;

/**
 * Generates a unique ID.
 */
export function uniqId(): string;

/**
 * Generates a unique identifier in UUID format.
 */
export function uuid(): string;

/**
 * Removes the first character from a given value.
 */
export function removeFirst<T = number | string | any[]>(value: T): 
  T extends number ? number :
  T extends string ? string :
  any[];

/**
 * Removes the last character from a given value.
 */
export function removeLast<T = number | string | any[]>(value: T): 
  T extends number ? number :
  T extends string ? string :
  any[];

/**
 * Concatenates multiple path segments into a single path.
 */
export function concatPath(...paths: (string | number)[]): string;
