const db = require('../data/dbConfig');



module.exports = {
    getRecepies,
    getRecepiesById,
    getShoppingList,
    getInstructions,
    getReceipeByIngredient
}


function getRecepies(){
    return db('receipe');
}

function getRecepiesById(id){
    return db('receipe')
        .first()
        .where({id}).then(receipe =>{
            if(receipe){
                return receipe
            }else{
                return null
            }
        })
}

function getShoppingList(id){
    return db('receipe_ingredients as ri') 
    .join('ingredient as i', 'i.id', 'ri.ingredient_id')
    .select('ingredient_name')
    .where({receipe_id:id})
}

function getInstructions(id){
    return db('instructions as in')
        .where({receipe_id:id})
        .orderBy('step_order')
}

function getReceipeByIngredient(ingredient_id){
    return db('receipe as r')
        .join('ingredient as in')
        .join('receipe_ingredients as ri', 'in.id', 'ri.ingredient_id')
        .select('receipe_name')
        .where({receipe_id:id})
}