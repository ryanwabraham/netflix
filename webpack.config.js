module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      // components here
      appStyles: 'src/styles/app.scss',
      genreData: 'src/data/genres.json',
      Filters: 'src/components/Filters.jsx',
      Main: 'src/components/Main.jsx',
      Nav: 'src/components/Nav.jsx',
      Hero: 'src/components/Hero.jsx',
      Results: 'src/components/Results.jsx',
      ResultItem: 'src/components/ResultItem.jsx'
    },
    extensions: ['*', '.js', '.json', '.jsx']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['babel-plugin-transform-class-properties']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[name].[ext]&publicPath=./img/&outputPath=public/img/'
      }
    ]
  }
};
