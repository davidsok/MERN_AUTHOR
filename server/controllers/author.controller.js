// const { response } = require('express');
// const { request } = require('express');
const { Author } = require('../models/author.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Author App"
    });
}

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({ name })
    .then(author => response.json(author))
    .catch(err=> response.status(400).json(err))  //status(400) is validation
}

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
    .then(authors => response.json(authors))
    .catch(err=> response.status(400).json(err))
}

module.exports.getOneAuthor = (request, response) => {
    Author.findOne({_id: request.params.id})
    .then(author => response.json(author))
    .catch(err => response.status(400).json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body,  { new: true})
    .then(updatedAuthor => response.json(updatedAuthor))
    .catch(err=> response.status(400).json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
    .then(deletedAuthor => response.json(deletedAuthor))
    .catch(err => response.status(400).json(err))
}