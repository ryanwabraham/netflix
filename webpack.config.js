module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      //components here
      appStyles: 'app/styles/app.scss',
      genreData: 'app/data/genres.json',
      Filters: 'app/components/Filters.jsx',
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Hero: 'app/components/Hero.jsx',
      Results: 'app/components/Results.jsx',
      ResultItem: 'app/components/ResultItem.jsx'
    },
    extensions: ['', '.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[name].[ext]&publicPath=/img/&outputPath=public/img/'
      }
    ]
  },
};
