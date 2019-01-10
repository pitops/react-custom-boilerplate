const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // generates an index.html
const postcssNormalize = require('postcss-normalize')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    // can import anything in shared folder with the same syntax as if it was in node modules
    // i.e import foo from 'bar'
    // bar being a component under src/shared
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared']
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          // postcss-loader needs to be before less|sass loaders
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [postcssNormalize(/* pluginOptions */)]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
