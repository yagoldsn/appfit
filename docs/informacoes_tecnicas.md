# Informações Técnicas / Instalações

## plataform para banco de dados
- [Supabase](https://supabase.com/)

## Banco de dados
- Postgres

## ORM back-end
- Prisma

## instalação dependencias
- express
```bash
npm install --save express
```
- ESlint
```bash
npm install eslint -D
```
- Prisma client
```bash
npm install @prisma/client --save
```
- Prisma
```bash
npm install prisma --save-dev
```
- PG postgres
```bash
npm install pg --save
```

- instalação nodemon para excução das correções automaticamente no projeto
```bash
npm install --save-dev nodemon
```
### Configurar ESlint - correção de erros

 1 - Inicializar configuração
```bash
npx eslint --init
```

Durante o processo, escolha:
- How would you like to use ESLint? → To check syntax and find problems
- What type of modules does your project use? → CommonJS (require/exports)
- Which framework does your project use? → None of these (já que é Node puro)
- Does your project use TypeScript? → No (a não ser que queira usar TS)
- Where does your code run? → Node
- Which style guide do you want to follow? → Pode escolher Standard ou Airbnb (Airbnb é mais rígido, Standard é mais simples).
- Format config file as → JSON
Isso vai gerar um arquivo .eslintrc.json.

3- Exemplo de .eslintrc.json pronto
Aqui está um modelo básico para Node + Express:

```bash
// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest"
    },
    plugins: {
      js: pluginJs,
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"],
      noUnusedVars: ["warn"],
      noConsole: "off"
    }
  }
];
```
4- Para usar o slint:

- nom run lint -> verifica problema
-npm run lint:fix -> corrige automaticamente

### configurar prettier  para formatação automatica

1- Instalar:
```bash
npm install prettier eslint-config-prettier eslint-plugin-prettier -D
```
2- Criar arquivo
- Na raiz do back_end prettier.config.js
```bash
// prettier.config.js
export default {
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80
};
```
3- Ajustar eslint.config.mjs
```bash
// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest"
    },
    plugins: {
      js: pluginJs,
      prettier: prettier
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "prettier/prettier": "error",   // força formatação Prettier
      semi: ["error", "always"],
      quotes: ["error", "single"],
      noUnusedVars: ["warn"],
      noConsole: "off"
    }
  }
];
```
4- Scrips no package.json
```bash
"scripts": {
  "lint": "eslint src/**/*.js",
  "lint:fix": "eslint src/**/*.js --fix",
  "format": "prettier --write src/**/*.js"
}
```

5- Para usar:

- nom run lint -> verifica problema
- npm run lint:fix -> corrige automaticamente
- npm run format -> aplica so o prettier

## Prisma

### Inicialização:
```
npx prisma init
```
Isso cria a pasta prisma/ com o arquivo schema.prisma e adiciona .env.


## Configurar Conexão Postgres

- No arquivo .env, configure a varialve de conexão.

## Definir o schema do Prisma

No arquivo prisma/schema.prisma:

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```
## Criar as tabelas no banco
```
npx prisma migrate dev --name init
```