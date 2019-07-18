const express = require('express');
const router = express.Router();

const Recipe = require('./receipe-model');


router.get('/', (req, res) =>{
    Recipe.getRecepies()
        .then(recipes =>{
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


module.exports = router;