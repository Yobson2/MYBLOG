const User = require('../models/Users');



const createPost = async (req, res) => {
    const id_user = req.params.id;

    console.log('Creating', id_user, req.body);
};
const getPost = async (req, res) => {};
const getPosts = async (req, res) => {};
const deletePost = async (req, res) => {};


module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost
};
