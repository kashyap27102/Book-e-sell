const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    AuthorName: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productImg: {
        type: String, // because its url
        required: true
    },
    desc:{
        type:String
    }
});

module.exports = mongoose.model('Book', bookSchema);