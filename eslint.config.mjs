import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }], // يمنع console.log لكن يسمح console.warn و console.error
      quotes: ["error", "double"], // يستخدم علامات التنصيص المزدوجة فقط
      semi: ["error", "always"], // يفرض وجود الفاصلة المنقوطة
      indent: ["error", 2], // يفرض التراجع بمقدار مسافتين
      "no-unused-vars": ["warn"], // يحذر من المتغيرات غير المستخدمة
      eqeqeq: ["warn", "always"], // يفرض استخدام === بدلاً من ==
      "no-var": ["error"], // يمنع استخدام var ويجب استخدام let أو const
      "prefer-const": ["error"], // يفضل const على let اذا لم يتم إعادة تعيين المتغير
      curly: ["error", "all"], // يفرض استخدام الأقواس {} مع كل جملة شرطية أو حلقة
      "brace-style": ["error", "1tbs"], // يفرض نمط أقواس 1tbs
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  },
]);
