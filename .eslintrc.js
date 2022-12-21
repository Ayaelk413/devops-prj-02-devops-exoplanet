module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  ignorePatterns: ["__test__/*.js"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  }
};
