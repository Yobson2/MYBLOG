const express = require('express');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');

// Insérer un utilisateur
const addUser = async (req, res) => {
    try {
        // Générer un sel sécurisé
        const salt = await bcrypt.genSalt(10);

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Créer un nouvel utilisateur avec le mot de passe haché
        const user = new User({
            nom: req.body.nom,
            email: req.body.email,
            password: hashedPassword,
            image: req.body.image
        });

        // Enregistrer l'utilisateur dans la base de données
        await user.save();

        console.log('User added successfully!');
        res.status(200).send(user);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Error adding user');
    }
}

//Connect user

const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const userDoc = await User.findOne({ email });

        if (!userDoc) {
            return res.status(404).send("Utilisateur non trouvé");
        }

        // Comparer le mot de passe fourni avec le mot de passe haché stocké dans la base de données
        const passwordMatch = bcrypt.compare(password, userDoc.password);

        if (passwordMatch) {
            res.status(200).send("Connexion réussie");
        } else {
            res.status(401).send("Mot de passe incorrect");
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Erreur lors de la connexion');
    }
}


module.exports = {
    addUser,
    loginUser
};
