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
| `formatCnpjCpf` | Formats a CPF or CNPJ number into a standardized string format. |
| `first` | Returns the first portion of strings, numbers, booleans, arrays, or objects. Supports `amount` option. |
| `last` | Returns the last portion of strings, numbers, booleans, arrays, or objects. Supports `amount` option. |
| `removeFirst` | Removes the first portion of strings, numbers, arrays, or objects. Supports `amount` option. |
| `removeLast` | Removes the last portion of strings, numbers, arrays, or objects. Supports `amount` option. |
| `uniqId` | Generates a unique identifier using random base-36 strings. |
| `uuid` | Generates a RFC4122 version 4 UUID. |
| `concatPath` | Concatenates and normalizes path segments, removing duplicate slashes. |
| `removeNonNumbers` | Removes all non-numeric characters from a string. |
| `tw` | Concatenates and deduplicates Tailwind CSS class names. Supports strings, arrays, numbers, nulls, and undefined values. |
| `keyValues` | Extracts values from a list of objects based on a key. Can remove duplicates. |
| `removeDuplicates` | Removes duplicate characters in strings or elements in arrays. |

## ✅ Usage Example

```ts
import { first, uuid, concatPath } from '@matheuscaetano/helprs';

console.log(first('Hello')); // H
console.log(uuid()); // Generates a UUID
console.log(concatPath('/api/', '/user/', '123')); // api/user/123
```

## 📄 License

MIT © [Matheus Caetano](https://lnk.bio/MatheusCaetano)matheuscaetano/helprs
