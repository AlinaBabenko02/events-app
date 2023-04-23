module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["node_modules/(?!axios)"],
};
