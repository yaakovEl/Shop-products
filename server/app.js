const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
//request = בקשה //response = תגובה

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.wxbmj.mongodb.net/?retryWrites=true&w=majority`, {
useNewUrlParser: true,
useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log("mongoos is connectd");
})

const cakeRouter = require('./api/routes/cake')
const categoriesRouter = require('./api/routes/categories')
const usersRouter = require('./api/routes/users')

app.use(morgan("dev"));

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET")
        return res.status(200).json({})
    }
    next();
})

//נמצא  ב Routes
app.use('/cake', cakeRouter);
app.use('/categories', categoriesRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    const error = new Error('כתובת השרת לא נמצאה');
    error.status = 404;
    next(error);
})

app.use((error, req, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})


module.exports = app;  