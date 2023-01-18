module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    singleQuote: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
