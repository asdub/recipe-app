const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy to Django backend
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8001',
      changeOrigin: true,
    })
  );
};