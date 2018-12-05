module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      // components here
      appStyles: 'app/styles/app.scss',
      genreData: 'app/data/genres.json',
      Filters: 'app/components/Filters.jsx',
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Hero: 'app/components/Hero.jsx',
      Results: 'app/components/Results.jsx',
      ResultItem: 'app/components/ResultItem.jsx'
    },
    extensions: ['*', '.js', '.json', '.jsx']
  },
  mode: 'development',
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
