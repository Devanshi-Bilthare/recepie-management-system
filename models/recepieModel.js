const mongoose = require('mongoose')

const recepieSchema = new mongoose.Schema({
    recepieName:String,
    description:String,
    instruction:[],
    ingredient:[]
})

const recepie = mongoose.model('recepie', recepieSchema)

module.exports = recepie