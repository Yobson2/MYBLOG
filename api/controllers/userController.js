const express = require('express');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');


const privateKey="egfdfgvsbkbziudviccujujqcfqcv";
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
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
       
        const passwordMatch = await bcrypt.compare(password, userDoc.password);
    
        if (passwordMatch) {
            //logged in
            jwt.sign({userId:userDoc.id}, privateKey, {}, async (err, token)=>{
                if (err) throw err;
                 // Update token in database
                 userDoc.token = token;
                 await userDoc.save();

                return res.json(
                    {
                        'Status' : true,
                        'acess_token' : token
                    }
                    
                    );
              });
        } else {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

    } catch (error) {
        console.error("Une erreur s'est produite", error);
        res.status(500).json({ message: "Erreur de serveur" });
    }
};

const userSection = async (req, res) => {
    try {
        const token=req.params.token;
        // Recherche de l'utilisateur par token
        const user = await User.findOne({ token });
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
         return res.json({ 
            _id: user._id,
            nom: user.nom,
            email: user.email,
            image: user.image,
        });
    } catch (error) {
        console.error("Une erreur s'est produite", error);
        return res.status(500).json({ message: "Erreur de serveur" });
    }
}


module.exports = {
    addUser,
    loginUser,
    userSection
};
