const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serves your HTML/CSS/Images

// Database Connection
const pool = new Pool({
    user: 'postgres',       // Your Postgres Username
    host: 'localhost',
    database: 'bunnytears', // Your Database Name
    password: 'password',   // Your Postgres Password
    port: 5432,
});

// --- API ROUTES ---

// 1. Get Products
app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) { console.error(err); res.sendStatus(500); }
});

// 2. Place Order
app.post('/api/orders', async (req, res) => {
    const { name, email, cart, total } = req.body;
    try {
        await pool.query(
            'INSERT INTO orders (customer_name, customer_email, items, total) VALUES ($1, $2, $3, $4)',
            [name, email, JSON.stringify(cart), total]
        );
        res.json({ success: true });
    } catch (err) { console.error(err); res.sendStatus(500); }
});

// 3. Admin: Get Orders
app.get('/api/admin/orders', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM orders ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) { console.error(err); res.sendStatus(500); }
});

// Start Server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));