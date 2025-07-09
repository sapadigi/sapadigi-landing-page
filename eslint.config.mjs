import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "off", // biar bisa pakai // @ts-ignore
      "@typescript-eslint/no-explicit-any": "off", // biar bebas pakai any kalau perlu
      "@typescript-eslint/strict-boolean-expressions": "off", // biar gak ribet boolean check
      "@typescript-eslint/no-unused-vars": "warn", // biar warning aja bukan error
    },
  },
];

export default eslintConfig;
