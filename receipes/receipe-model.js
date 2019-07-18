const db = require('../data/dbConfig');



module.exports = {
    getRecepies,
}


function getRecepies(){
    return db('receipe');
}