const { request } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
const Book = require('../models/book');
const User = require('../models/user');

// GET ALL ORDERS
router.get('/', async(req, res, next) => {
    await Order.find()
        .populate('product', 'title AuthorName price productImg createdAt') // to see the details of full product
        .then(orders => {
            res.status(200).json({
                count: orders.length,
                orders: orders.map(order => {
                    return {
                        book: order.product, // affect here
                        _id: order._id,
                        quantity: order.quantity,
                        user:order.user,
                        orderDate: order.createdAt
                    }
                }),
                request: {
                    type: 'GET',
                    url: "http://localhost:8000/orders"
                }
            })
        }).catch(err => {
            res.status(500).json(err);
        })

})

// ADD ORDER
router.post('/', async(req, res, next) => {
    console.log(User.findById(req.body.userId));
    await Book.findById(req.body.productId).then(book => {
            if (!book) {
                return res.status(404).json({
                    message: 'book was not found'
                })
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId,
                user: req.body.userId
            });
            order.save();
        })
        .then(result => {
            console.log(result);
            const user = User.findById(req.body.userId);
            user.updateOne({ $push: { buyBooks: req.body.productId } }).then(() => {
                res.status(200).json({
                    message: "order added sucessfully",
                    request: {
                        type: "POST",
                        url: "https://localhost:8000/orders"
                    },
                })
            })
            
        }).catch(err => {
            console.log(err);
            res.json(500).json(err);
        })
})

// DELETE ORDER
router.delete('/:id', async(req, res, next) => {
    const order = Order.findById(req.params.id);
    await Order.findByIdAndDelete(req.params.id).then(order => {
        res.status(200).json({
            message: 'order deleted succesfully',
            request: {
                type: 'DELETE',
                url: "https://localhost:8000/orders/" + req.params.id,
            }
        })
    }).catch(err => {
        res.status(500).json(err);
    })
})

// Quantity Update
router.put('/:id', async(req, res, next) => {
    await Order.findByIdAndUpdate(req.params.id, { $set: req.body }).then(result => {
        res.status(200).json({
            message: 'product updated successfully',
            product: result,
            request: {
                type: 'PUT',
                url: "https://localhost:8000/orders/" + req.params.id,
            }
        })
    }).catch(err => {
        res.status(500).json(err);
    })

})
module.exports = router;