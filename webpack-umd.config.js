const webpack = require('webpack');
const path = require('path');

const plugins = [new webpack.optimize.OccurenceOrderPlugin()];

if (process.env.MINIFY) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

const filename = (process.env.MINIFY) ? 'ReactTitlebar.min.js' : 'ReactTitlebar.js';

module.exports = {
  entry: {
    Titlebar: './index.js',
  },
  output: {
    library: 'ReactTitlebar',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'umd'),
    filename,
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
  node: {
    Buffer: false,
    process: false,
    setImmediate: false,
  },
  plugins,
};
