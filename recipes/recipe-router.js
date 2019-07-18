const express = require('express');
const router = express.Router()


router.get('/', (req, res) =>{
    res.send('<h1>Data Migration is working</h1>')
});


module.exports = router;