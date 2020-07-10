module.exports = {
  parser: "babel-eslint",
  rules: {
    strict: 0,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["jsx-a11y"],
}
