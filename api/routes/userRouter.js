const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs=require('fs')
const userControllers=require('../controllers/userController')



//Inserer un user
router.post('/register',userControllers.addUser)

//connect user
router.post('/login',userControllers.loginUser)

//
router.get('/profile/:token',userControllers.userSection)
router.get('/users',userControllers.getAllUser)
router.get('/users/:id',userControllers.getUserById)

module.exports=router