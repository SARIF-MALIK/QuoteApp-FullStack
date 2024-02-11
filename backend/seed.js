const mongoose = require('mongoose'); 

const Quotes = require('./models/Quote')

let dummyQuotes = [
    {
        author: 'sam',
        text: 'random quote'
    }, 
    {
        author: 'raj', 
        text: 'raj is for ruling'
    }, 
    {
        author: 'arshad iqbal', 
        text: 'urdu poetry'
    }
]

async function seedDB(){
    await Quotes.deleteMany({}); 
   await Quotes.insertMany(dummyQuotes); 
   console.log("db seeded")
}

module.exports = seedDB; 