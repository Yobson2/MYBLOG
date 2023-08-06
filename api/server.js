const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const PORT = 1208;
const connectDB = require('./database/config');
const routes = require('./routes/userRouter');

// Connect database
connectDB();

/* Initialisation de mon serveur */
const app = express();

// Middlewares
app.use(express.json({ limit: '10mb' })); // Augmentez la limite au besoin
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// Test route
app.get('/', (req, res) => {
    res.json('Ok');
});

// Route prefix
app.use('/', routes);

// Listen on port
app.listen(PORT, () => {
    console.log(`Server started at http://localhost/:${PORT}`);
});
