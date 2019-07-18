const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig')


router.get('/', (req, res) =>{
    db('recipe')
        .then(recipes =>{
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


module.exports = router;