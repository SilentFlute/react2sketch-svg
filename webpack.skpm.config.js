const path = require('path');

module.exports = (config) => {
  if (process.env.LOCAL_DEV) {
    config.module.rules[1].test = /^(?!.*\.(jsx?|tsx?|json|svg|md|nib|xib|framework|xcodeproj|xcworkspace|xcworkspacedata|pbxproj)$).*/;
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@skpm/babel-preset'],
          },
        },
        {
          loader: '@svgr/webpack',
          options: {
            native: true,
            svgoConfig: {
              plugins: [{ convertPathData: false }],
            },
            babel: false,
          },
        },
      ],
    });  
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-native-svg': path.resolve(__dirname, './Svg.js'),
      },
    };
  }
};
