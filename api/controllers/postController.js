const Post = require('../models/Posts');
const axios = require('axios');



const createPost = async (req, res) => {

    const userPost = new Post({
        title: req.body.title,
        content: req.body.content,
        authorId:req.params.id,
        image: req.body.files,
       
    });

    try {
    
        await userPost.save();
        res.status(200).json({
            success: true,
            message: 'Les données ont été insérées avec succès dans la base de données.'
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Les données n'ont pas été insérées"
        });
    }
};
const getPosts = async (req, res) => {
    const tabFinal=[];
     const allUsers = await axios.get('http://localhost:3030/v1/users');
     const allPosts = await Post.find({});
 
    allUsers.data.data.forEach(user => {
        allPosts.forEach(post => {
            if (user._id === post.authorId.toString()) {
                tabFinal.push({
                     id_user: user._id, 
                     nom: user.nom,
                     image:user.image,
                     email: user.email,
                      post:{
                        id_post:post._id.toString(),
                        title:post.title,
                        content:post.content,
                        image:post.image,
                        date:post.created,
                        heure: verifierNombreDeuxChiffres(post.created.getHours()) + " : " + verifierNombreDeuxChiffres(post.created.getMinutes()),
                        date:post.created.toISOString().slice(0, 10)
                      }
                    });
               }
        });
    });
    function verifierNombreDeuxChiffres(nombre) {
        let nombreString = nombre.toString();
        if (nombreString.length === 1) {
            nombreString = '0' + nombreString;
        }
        return nombreString;
    }
    

    try {
        res.status(200).json({
          success: true,
          data: tabFinal
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Une erreur est survenue lors de la récupération des postes."
        });
      }
     
};





const getPost = async (req, res) => {};

const deletePost = async (req, res) => {};


module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost
};
