require('dotenv').config();
const express = require('express');
const Redis = require('ioredis');
const cors = require('cors');



const app = express();
app.use(cors());
const PORT = process.env.ORDER_SERVICE_PORT || 3002;


const redis = new Redis({
    host: process.env.REDIS_HOST || 'redis-cache',
    port: process.env.REDIS_PORT || 6379,
})

app.get('/orders', async (req, res) => {
    try {
        await redis.set('order-check', 'OK')
        const result = await redis.get('order-check')
        res.json({status: 'connected', result})
    }
    catch (err) {
        console.log(err);
        res.status(500).send('redis error:', err.message);
    }
})

app.listen(PORT, () => {
    console.log(`order service is listening on port ${PORT}`);
})