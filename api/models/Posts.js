const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    // postId: {
    //      type: mongoose.Schema.Types.ObjectId,
    //       required: true 
    //     },
     title: {
             type: String,
              required: true
             },
    content: { 
        type: String,
         required: true
         },
    authorId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
          required: true 
        },
    image: {
        type: String,
        requied: true,
      },
    created:{
        type: Date,
        require:true,
        default: Date.now,
    },
})

module.exports=mongoose.model('Post',userSchema);