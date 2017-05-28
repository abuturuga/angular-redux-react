const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path'),
      isDev = process.env.NODE_ENV !== 'production',
      PORT = 3000;


if(isDev) {
  const webpack = require('webpack'),
        config = require('./webpack.config'),
        webpackMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        compiler = webpack(config),
        middleware = webpackMiddleware(compiler, {
          publicpath: config.output.publicPath,
          contentBase: 'src',
          stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
          }
        }),
        hotMiddleware = webpackHotMiddleware(compiler, {
          reload: true,
          noInfo: true,
          publicPath: config.output.publicPath
        });

  app.use(middleware);
  app.use(hotMiddleware);
} else {
  app.use('/static', express.static('static'));
}


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
