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