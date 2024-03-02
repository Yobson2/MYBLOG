const express = require('express');
const router = express.Router();
const postControllers=require('../controllers/postController')




router.post('/create_post/:id',postControllers.createPost)
router.get('/all_posts',postControllers.getPosts)
router.get('/all_posts/:idPost',postControllers.getPost)
router.delete('/delete_post/:idPost',postControllers.deletePost)



module.exports=router