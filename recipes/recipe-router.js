const express = require('express');
const router = express.Router();

const Recipe = require('./recipe-model');


router.get('/', (req, res) =>{
    Recipe.find()
        .then(recipes =>{
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});


module.exports = router;