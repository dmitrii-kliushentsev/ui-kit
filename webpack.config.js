const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  return {
    entry: path.resolve(__dirname, 'src/index.ts'),

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env'],
              plugins: [  'babel-plugin-styled-components', 'babel-plugin-twin', 'babel-plugin-macros'],
            },
          },
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: (options.mode == 'production' ? true : false),
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')],
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
      ],
    },
  };
};
