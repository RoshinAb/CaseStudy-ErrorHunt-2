const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');

mongoose.connect('mongodb+srv://roshin:Mongo*123*@cluster0.d1vlg.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;