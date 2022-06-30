const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
},{ timestamps:true })

module.exports = mongoose.model('Order', orderSchema);