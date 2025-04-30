require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.API_GATEWAY_PORT || 3000;

app.use('/products', createProxyMiddleware({
    target: 'http://product-service:3001/products',
    changeOrigin: true,
    pathRewrite: {
        '^/products': '', // wtedy GET /products → GET /
    },
}));


// PROXY /orders → order-service:3002
app.use('/orders', createProxyMiddleware({
    target: 'http://order-service:3002/orders',
    changeOrigin: true,
    pathRewrite: {
        '^/orders': '',
    },
}));

app.listen(PORT, () => {
    console.log(`API Gateway is listening on port ${PORT}`);
});
