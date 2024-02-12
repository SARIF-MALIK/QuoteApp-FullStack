const express = require('express')
const router = express.Router(); 
const Quote = require('../models/Quote');
const Quotes = require('../models/Quote');


router.get('/allquotes', async(req, res)=>{
    try {
        let allQuotes = await Quote.find({}); 
        res.status(200).json(allQuotes); 
    } catch (error) {
        res.status(400).json({msg: 'something went wrong'})
    }
})

router.post('/addquotes',async (req, res)=>{
    let {text, author} = req.body; 
    await Quotes.create({author, text}); 
    res.status(201).json({msg: "new quote added successfully"})
})

router.get('/quotes/:id',async (req, res)=>{
    let {id} = req.params; 
    const quote = await Quote.findById(id);
    res.status(200).json(quote); 
    
})

module.exports = router; 