const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

// Control storage or modified
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(res, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject or accept file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
        cb(null, true);
    else
        cb(null, false);
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter,
});

const Book = require('../models/book');
const User = require('../models/user');

// GET ALL BOOKS
router.get('/', async(req, res, next) => {
    try {
        const books = await Book.find().select('_id title Auther price AuthorName productImg').populate('user', 'firstName lastName email mobileNo');
        res.status(200).json({
            count: books.length,
            books: books.map(book => {
                return {
                    title: book.title,
                    price: book.price,
                    id: book._id,
                    user: book.user,
                    AuthorName: book.AuthorName,
                    productImg: 'http://localhost:8000/' + book.productImg,
                    request: 'GET',
                    url: 'http://localhost:8000/books'
                }
            })
        });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }

});

// SELL BOOK
router.post('/:id', upload.single('productImg'), async(req, res, next) => {
    console.log(req.file);
    try {
        const book = await new Book({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            AuthorName: req.body.AuthorName,
            user: req.params.id,
            price: req.body.price,
            productImg: req.file.path,
            desc:req.body.desc
        })
        book.save().then((result) => {
            console.log(result)
            const user = User.findById(req.params.id)
            user.updateOne({ $push: { sellBooks: book._id } }).then(() => {
                res.status(200).json({
                    message: 'Book Added Successfully & sellBooks Updated',
                    book: book,
                    request: {
                        type: 'POST',
                        url: `http://localhost:8000/books/${req.params.id}`
                    }
                })
            })
        })
    } catch (err) { console.log(err) };

})

// GET SINGLE BOOK
router.get('/:id', async(req, res, next) => {
    try {
        const book = await Book.findById(req.params.id)
            .populate('user', 'firstName lastName email mobileNo');
        if (book)
            res.status(200).json({
                book: {
                    id: book._id,
                    title: book.title,
                    AuthorName: book.AuthorName,
                    desc:book.desc,
                    price: book.price,
                    productImg: 'http://localhost:8000/' + book.productImg,
                    seller: book.user,
                    request: 'GET',
                    url: 'http://localhost:8000/books/' + book._id
                }
            });
        else
            res.status(200).json({ message: 'No valid Entry for this ID' })
    } catch (err) {
        console.log(err);
    }
})

// UPDATE BOOK
router.put('/:id', async(req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        })
        res.status(200).json({
            message: 'Book is updated',
            book: book
        })
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
})

// DELETE BOOK
router.delete('/:id', async(req, res, next) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'product deleted successfullly',
            request: 'DELETE',
            url: 'http://localhost:8000/books' + req.params.id
        })
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }

})

module.exports = router;