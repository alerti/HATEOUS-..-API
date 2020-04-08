const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const mongo = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 3002;
const Book = require('./models/bookModel');
const bookRouter=require('./routes/bookRouter')(book);
const booksController = require('../controllers/booksController')

//pull json out of the post body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',bookRouter);
app.get('/', (req, res) => {
  res.send('welcome to my Nodemon API');
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

module.exports = app;
