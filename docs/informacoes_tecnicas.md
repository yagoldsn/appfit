# Informações Técnicas / Instalações

- instalação express
```bash
npm install --save express
```
- instalação nodemon para excução das correções automaticamente no projeto
```bash
npm install --save-dev nodemon
```
### instalar e configurar ESlint - correção de erros

 1- Instalar ESLint como dev
```bash
npm install eslint -D
```

2- Inicializar configuração
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

## plataform para banco de dados
- [Supabase](https://supabase.com/)
