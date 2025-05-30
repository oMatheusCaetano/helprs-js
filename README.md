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

- `first(value)` – Returns the first character or element of strings, arrays, objects, numbers, or booleans.
- `last(value)` – Returns the last character or element of strings, arrays, objects, numbers, or booleans.
- `removeFirst(value)` – Removes the first character or item from strings, arrays, or numbers.
- `removeLast(value)` – Removes the last character or item from strings, arrays, or numbers.
- `uniqId()` – Generates a unique identifier based on `Math.random()`.
- `uuid()` – Generates a UUID in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.
- `concatPath(...paths)` – Safely concatenates path segments (`/`).
- `removeNonNumbers(value)` – Removes all non-numeric characters from a string.
- `tw(className, ...args)` – Merges TailwindCSS classes using `classnames` and `tailwind-merge`.

## ✅ Usage Example

```ts
import { first, uuid, concatPath } from '@matheuscaetano/helprs';

console.log(first('Hello')); // H
console.log(uuid()); // Generates a UUID
console.log(concatPath('/api/', '/user/', '123')); // api/user/123
```

## 🧪 Tests

```bash
npm test
```

## 📄 License

MIT © [Matheus Caetano](https://lnk.bio/MatheusCaetano)matheuscaetano/helprs
