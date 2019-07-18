const express = require('express');

const server = express();

server.get('/', (req, res) =>{
    res.send('<h1>Data Migration is working</h1>')
});


const port = 4000;

server.listen(port, () => console.log('Server is up and running'))