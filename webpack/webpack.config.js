// // const path = require('path');
// // const HtmlWebpackPlugin = require('html-webpack-plugin');

// // module.exports = {
// //   entry: './src/index.tsx',
// //   output: {
// //     path: path.resolve(__dirname, 'dist'),
// //     filename: 'bundle.js',
// //   },
// //   resolve: {
// //     extensions: ['.ts', '.tsx', '.js', '.jsx'],
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.tsx?$/,
// //         use: 'ts-loader',
// //         exclude: /node_modules/,
// //       },
// //       {
// //         test: /\.css$/,
// //         use: ['style-loader', 'css-loader'],
// //       },
// //     ],
// //   },
// //   devServer: {
// //     static: path.join(__dirname, 'dist'),
// //     port: 3000,
// //   },
// //   plugins: [
// //     new HtmlWebpackPlugin({
// //       template: './public/index.html',
// //     }),
// //   ],
// //   mode: 'development',
// // };
// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// module.exports = {

//   entry: path.resolve(__dirname, '..', './src/index.tsx'),
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|js)x?$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
//         type: 'asset/inline',
//       },
//     ],
//   },
//   output: {
//     path: path.resolve(__dirname, '..', './build'),
//     filename: 'bundle.js',
//   },
//   mode: 'development',
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: path.resolve(__dirname, '..', './public/index.html'),
//     }),
//   ],
// }
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
  ],
};
