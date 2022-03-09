const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ADD USER OR SIGN-UP USER
router.post('/signup', async(req, res, next) => {
    await User.find({ email: req.body.email }).then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: "Mail exists"
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err)
                    return res.status(500).json(err);
                else {
                    const user = new User({
                        _id: mongoose.Types.ObjectId(),
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        mobileNo: req.body.mobileNo,
                        email: req.body.email,
                        password: hash,
                    })
                    user.save().then(result => {
                            console.log(result);
                            res.status(200).json({
                                message: 'New User Created',
                                user: result,
                                request: {
                                    type: 'POST',
                                    url: 'http://localhost:8000/users'
                                }
                            })
                        })
                        .catch(err => {
                            res.status(500).json(err);
                        })
                }
            });
        }
    })
})

// LOGIN USER
router.post('/login', async(req, res, next) => {
    await User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(404).json({
                        message: 'Auth Failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                            email: user.email,
                            userId: user._id
                        },
                        'secret', // private string
                        {
                            expiresIn: '1h'
                        }
                    )
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token,
                        userId: user._id
                    })
                }
                res.status(404).json({
                    message: 'Auth Failed'
                })

            })
        } else {
            return res.status(404).json({
                message: 'Auth Failed'
            })
        }
    }).catch(err => {
        res.status(500).json(err);
    })
})
module.exports = router