const mongoose = require("mongoose")

const Schema = mongoose.Schema
const superHeroeSchema = new Schema ({
    nombre:{
        type:String,
        required: true
    },
    destreza:{
        type: String,
        required: true
    },
    altura:{
        type: Number,
        required:true
    },
    debilidad:{
        type:String,
        required:true
    },
    tienePoderes:{
        type:Boolean,
        required:true
    },
    rival:{
        type: String,
        required:true
    },
   
})
const superHeroe = mongoose.model('superHeroe',superHeroeSchema)
module.exports = {superHeroe}