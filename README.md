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

🚀 A collection of utility functions written in JavaScript/TypeScript, focused on productivity, readability, and code reuse.

## 📦 Installation

## 📦 Instalação

```bash
npm install @matheuscaetano/helprs
```

ou

```bash
yarn add @matheuscaetano/helprs
```

## 🛠️ Features

- `first(value)` – Retorna o primeiro caractere ou elemento de strings, arrays, objetos, números ou booleanos.
- `last(value)` – Retorna o último caractere ou elemento de strings, arrays, objetos, números ou booleanos.
- `removeFirst(value)` – Remove o primeiro caractere ou item de strings, arrays ou números.
- `removeLast(value)` – Remove o último caractere ou item de strings, arrays ou números.
- `uniqId()` – Gera um identificador único baseado em `Math.random()`.
- `uuid()` – Gera um UUID no formato `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.
- `concatPath(...paths)` – Concatena segmentos de caminho (`/`) de forma segura.
- `removeNonNumbers(value)` – Remove todos os caracteres não numéricos de uma string.
- `tw(className, ...args)` – Faz merge de classes TailwindCSS com `classnames` e `tailwind-merge`.

## ✅ Exemplo de uso

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

MIT © [Matheus Caetano](https://lnk.bio/MatheusCaetano)