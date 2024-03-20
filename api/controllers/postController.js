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
     
     console.log('allUsers', allUsers.data.data);
    //  console.log('allPosts', allPosts);
    // let data=allUsers.data.data

    // console.log('data', data);
    // data.forEach(user => {
    //     console.log('user',user);
    // });



};





const getPost = async (req, res) => {};

const deletePost = async (req, res) => {};


module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost
};
