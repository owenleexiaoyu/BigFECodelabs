module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "nativewind/babel",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ],
};
