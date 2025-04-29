require('dotenv').config()

const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const PORT = process.env.API_GATEWAY_PORT || 3000;

app.use('/products', createProxyMiddleware({
    target: 'http://localhost:3001/products',
    changeOrigin: true
}))

app.use('/orders', createProxyMiddleware({
    target: 'http://localhost:3002/orders',
    changeOrigin: true
}))

app.listen(PORT, () => {
    console.log(`api gateway is istening on port ${PORT}`);
})