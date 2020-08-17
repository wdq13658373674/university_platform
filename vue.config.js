const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 3000,
    proxy: 'http://localhost:3000',
    open: true,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
  },
};
