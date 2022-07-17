const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'Name is required'],
        minlength: [3,'Minimum length 3 characters']

    }
}, { timeStamps: true }
);
module.exports.Author = mongoose.model('Author', AuthorSchema);