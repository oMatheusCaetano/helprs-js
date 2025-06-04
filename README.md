# @matheuscaetano/helprs


🚀 A collection of utility functions written in JavaScript/TypeScript, focused on productivity, readability, and code reuse.

## 📦 Installation

```bash
npm install @matheuscaetano/helprs
```

or

```bash
yarn add @matheuscaetano/helprs
```

## 🛠️ Features

| Function         | Description |
|------------------|-------------|
| `first(value, options?)` | Returns the first portion of strings, numbers, booleans, arrays, or objects. Supports `amount` option. |
| `last(value, options?)` | Returns the last portion of strings, numbers, booleans, arrays, or objects. Supports `amount` option. |
| `removeFirst(value, options?)` | Removes the first portion of strings, numbers, arrays, or objects. Supports `amount` option. |
| `removeLast(value, options?)` | Removes the last portion of strings, numbers, arrays, or objects. Supports `amount` option. |
| `uniqId()` | Generates a unique identifier using random base-36 strings. |
| `uuid()` | Generates a RFC4122 version 4 UUID. |
| `concatPath(...paths)` | Concatenates and normalizes path segments, removing duplicate slashes. |
| `removeNonNumbers(value)` | Removes all non-numeric characters from a string. |
| `tw(...args)` | Concatenates and deduplicates Tailwind CSS class names. Supports strings, arrays, numbers, nulls, and undefined values. |
| `keyValues(listOfObjects, key, options?)` | Extracts values from a list of objects based on a key. Can remove duplicates. |
| `removeDuplicates(value, options?)` | Removes duplicate characters in strings or elements in arrays. |

## ✅ Usage Example

```ts
import { first, uuid, concatPath } from '@matheuscaetano/helprs';

console.log(first('Hello')); // H
console.log(uuid()); // Generates a UUID
console.log(concatPath('/api/', '/user/', '123')); // api/user/123
```

## 📄 License

MIT © [Matheus Caetano](https://lnk.bio/MatheusCaetano)matheuscaetano/helprs
