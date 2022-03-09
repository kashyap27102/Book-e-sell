const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// DELETE USER 
router.delete('/:id', async(req, res, next) => {
    await User.findByIdAndDelete(req.params.id).then(user => {
        res.status(200).json({
            message: 'User Deleted Successfully',
        })
    }).catch(err => {
        res.status(500).json(err);
    })
})

// VIEW SINGLE USER
router.get('/:id', async(req, res, next) => {
    User.findById(req.params.id).then(user => {
        const { password, __v, ...other } = user._doc;
        res.status(200).json({
            message: 'user found Successfully',
            user: other
        })
    })
})

// VIEW ALL USER
router.get('/', async(req, res, next) => {
    User.find({}).then(users => {
        res.status(200).json({
            message: 'All user found Successfully',
            user: users.map(user => {
                const { password, __v, ...other } = user._doc;
                return {
                    user: other
                }
            })
        })
    })
})
module.exports = router;