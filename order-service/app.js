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
    db: 0, // <- to dopisz
});


redis.on('connect', () => {
    console.log(' Redis connected');
});

redis.on('error', (err) => {
    console.error(' Redis connection error:', err.message);
});


app.get('/debug', async (req, res) => {
    try {
        const keys = await redis.keys('*');
        const debugData = {};

        for (const key of keys) {
            const value = await redis.get(key);
            debugData[key] = value;
        }

        res.json(debugData);
    } catch (err) {
        console.error('Debug error:', err.message);
        res.status(500).json({ error: 'Failed to fetch debug data' });
    }
});


app.get('/orders', async (req, res) => {
    try {
        const keys = await redis.keys('order:*');
        const orders = [];

        for (const key of keys) {
            const data = await redis.get(key);
            orders.push({ id: key, ...JSON.parse(data) });
        }

        res.json(orders);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Redis error', details: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`order service is listening on port ${PORT}`);
})