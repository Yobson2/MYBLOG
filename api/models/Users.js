const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    nom: {
        type: String,
        requied: true,
        min:4
      },
    email: {
        type: String,
        requied: true,
      },
      password: {
        type: String,
        requied: true,
      },
    image: {
        type: String,
        requied: true,
      },
      token: {
        type: String ,
        default: 'default_token_value'
    },
    created:{
        type: Date,
        require:true,
        default: Date.now,
    },
})

module.exports=mongoose.model('User',userSchema);