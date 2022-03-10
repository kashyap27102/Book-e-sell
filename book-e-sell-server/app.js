const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bookRoute = require('./api/routes/books');
const orderRoute = require('./api/routes/orders');
const userRoute = require('./api/routes/users');
const authRoute = require('./api/routes/auth');
const port = process.env.PORT || 8000;

// connect database
mongoose.connect('mongodb+srv://kashyap:{password}@cluster0.g1drt.mongodb.net/{databasename}?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('database connected');
})

// middlewares
app.use(morgan('dev'));
/* The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser */
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/books', bookRoute);
app.use('/orders', orderRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);

// HANDLING ERROR 
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.listen(port, () => {
    console.log('server is running');
})
