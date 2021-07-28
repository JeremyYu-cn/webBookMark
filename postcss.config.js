// @ts-check

const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    require('autoprefixer'),
    pxtorem({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i,
    }),
  ],
};
