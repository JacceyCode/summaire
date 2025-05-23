import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:tailwindcss/recommended",
    ],
    plugins: ["prettier", "tailwindcss"],
    rules: {
      "prettier/prettier": "error",
      "react/no-unescaped-entities": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  }),
};

export default eslintConfig;
