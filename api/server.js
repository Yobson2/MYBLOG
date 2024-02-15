const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const cookieParser=require('cookie-parser');
const PORT = 3030;
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

app.use(cookieParser());

// Test route
app.get('/', (req, res) => {
    res.send("Bienvenue sur notre serveur ! 🎉");
});
app.get('/set-cookie', (req, res) => {
    // Définition d'un cookie nommé 'mon_cookie' avec une valeur 'valeur_du_cookie'
    res.cookie('mon_cookie', 'valeur_du_cookie', { maxAge: 900000, httpOnly: true });
    res.send('Cookie défini avec succès !');
  });

// Route prefix
app.use('/v1/', routes);

// Listen on port
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});



//je me suis arreté au niveau de la route /profile