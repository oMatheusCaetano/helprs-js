# @matheuscaetano/helprs

🚀 Coleção de funções utilitárias escritas em JavaScript/TypeScript, focadas em produtividade, legibilidade e reutilização de código.

## 📦 Instalação

```bash
npm install @matheuscaetano/helprs
```

ou

```bash
yarn add @matheuscaetano/helprs
```

## 🛠️ Funcionalidades

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
console.log(uuid()); // Gera um UUID
console.log(concatPath('/api/', '/user/', '123')); // api/user/123
```

## 🧪 Testes

```bash
npm test
```

## 📄 Licença

MIT © [Matheus Caetano](https://lnk.bio/MatheusCaetano)