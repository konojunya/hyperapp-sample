module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "build/bundle.js",
  },
  module: {
      loaders: [{
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "awesome-typescript-loader"
      }]
  }
}
