/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  arrowParens: "always",

  plugins: [
    "@trivago/prettier-plugin-sort-imports",
  ],
  // pluginSearchDirs: false,

  /** IMPORT SORT OPTIONS */
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};