require('dotenv').config();
const express = require('express')
const {Pool} = require('pg')

const app = express()

const PORT = process.env.PRODUCT_SERVICE_PORT|| 3001

const pool = new Pool({
    host: process.env.POSTGRES_HOST || 'database',
    user: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD || 'secret',
    database: process.env.POSTGRES_DATABASE || 'products',
    port: process.env.POSTGRES_PORT || 5432
})

app.get('/products', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products")
        res.json(result.rows)
    }
    catch (err) {
        console.error('error', err.message)
        res.status(500).send(' DB error')
    }
})
app.listen(PORT, () => {
    console.log(`Product service listening on port ${PORT}`)
})