const path = require("path");
const mocker = require("./mocker");
const apiMocker = require("mocker-api");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  devServer: {
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: "pre",
        use: [
          {
            loader: "eslint-loader",
            options: { fix: true }
          }
        ],
        include: path.resolve(__dirname, "./src/**/*.js"),
        exclude: /node_modules/
      },
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
