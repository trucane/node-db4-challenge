const express = require('express');
const router = express.Router();

const Receipe = require('./receipe-model');


router.get('/', (req, res) =>{
    Receipe.getRecepies()
        .then(recipes =>{
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', (req, res) =>{
    const {id} = req.params
        Receipe.getRecepiesById(id)
            .then(receipe =>{
                if(receipe){
                    res.status(200).json(receipe)
                }else{
                    res.status(404).json({message:"this receipe does not exist"})
                }
            })
            .catch(error => {
                res.status(500).json(error)
            })
});

router.get('/:id/shoppingList', async(req, res) =>{
    const {id} = req.params;
    const receipe = await Receipe.getRecepiesById(id);
    if(!receipe){
        res.status(404).json({message:"receipe doesnt exist"})
    }else{
        try{
            const list = await Receipe.getShoppingList(id)
            if(list){
                res.status(200).json(list)
                  
            }else{
                res.status(400).json({message:"no list"})
            }
                
        }catch(error){
            res.status(500).json(error)
        }
    }

});


router.get('/:id/instructions', async(req, res) =>{
    const {id} = req.params;

    const receipe = await Receipe.getRecepiesById(id);
    if(!receipe){
        res.status(404).json({message:"receipe doesnt exist"})
    }else{
        try{
            const instructions = await Receipe.getInstructions(id);
            if(instructions){
                res.status(200).json(instructions)
            }else{
                res.status(400).json({message:"no instructions"})
            }
    
        }catch{
            res.status(500).json(error)
        }
    }

});


module.exports = router;