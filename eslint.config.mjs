import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 👇 Your existing extended configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Ignore Prisma generated files
  {
    ignores: ["src/generated/prisma/**"],
  },
];

export default eslintConfig;
