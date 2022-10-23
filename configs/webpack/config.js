const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CSSNamer = require('./cssNamer');
const root = path.resolve(__dirname, '../../');
const src = path.resolve(root, 'lib');
const depsRe = /node_modules/;

module.exports = () => {
  const namer = new CSSNamer();

  return {
    mode: process.env.NODE_ENV || 'production',
    devtool: false,
    entry: { 
      main: path.resolve(src, 'index')
    },

    output: {
      filename: 'js/[name].js',
      publicPath: '../',
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
      library: {
        type: 'commonjs-module'
      },
    },

    externals: [
      {
        react: 'react',
        'prop-types': 'prop-types',
        'react-dom/client': 'react-dom/client',
        'react-dom': 'react-dom',
      }
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: depsRe,
          use: [
            {
              loader: 'ts-loader',
              options: {
                compilerOptions: {
                  exclude: ['node_modules', '**/*.stories.tsx']
                }
              }
            }
          ]
        },

        {
          test: /\.css$/,
          include: depsRe,
          use: [
            MiniCssExtractPlugin.loader,
            { 
              loader: 'css-loader',
            }
          ],
        },

        {
          test: /\.css$/,
          exclude: depsRe,
          use: [
            MiniCssExtractPlugin.loader,
            { 
              loader: 'css-loader',
              options: { 
                modules: { 
                  getLocalIdent: (context, _, localName) => (
                    namer.getName(`${context.resource}__${localName}`)
                  ),
                }
              }
            }
          ],
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'public/[name].css',
        ignoreOrder: true
      }),

      new CssMinimizerPlugin(),
      
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      
      new webpack.ProvidePlugin({
        React: 'react'
      }),
    ]
  }
};