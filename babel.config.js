module.exports = {
  presets: [
    ["@babel/env", { targets: "last 2 chrome versions" }],
    "@babel/react",
    "@babel/typescript"
  ],
  plugins: ["babel-plugin-styled-components"]
};
