const express = require('express');
const RecipeRouter = require('./recipes/recipe-router')

const server = express();

server.get('/', (req, res) =>{
    res.send('<h1>Data Migration is working</h1>')
});


server.use('/api/recepies', RecipeRouter)

module.exports = server;