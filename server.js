const express = require('express');
const RecipeRouter = require('./receipes/receipe-router')

const server = express();

server.get('/', (req, res) =>{
    res.send('<h1>Data Migration is working</h1>')
});


server.use('/api/receipes', RecipeRouter)

module.exports = server;