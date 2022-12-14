const { superHeroe } = require("../models/marvel")
const { validationResult } = require("express-validator")
const axios = require('axios');

const crearsuperHeroe = async (req, res) => {
    try {
        const err = validationResult(req) 
        if (err.isEmpty()) {
            const item = new superHeroe(req.body)                   
            await item.save()
            res.status(201).json({ item })  
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}


const versuperHeroe = async (req, res) => {
    const item = await superHeroe.find()
    res.status(200).json({ item })
}


const modificarsuperHeroe = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await superHeroe.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({ msg: "se modifico el superHeroe" })
        } else {
            res.status(501).json({ err })
        }
    } catch (error) {
        res.status(501).json({ error })
    }
}


const eliminarsuperHeroe = async (req, res) => {
    const item = await superHeroe.findByIdAndDelete(req.params.id)
    res.status(204).json({ msg: "superHeroe Eliminado Correctamente ", item })
}

//consumir Api externa

const consumirApi = async (req, res) => {
    try {
        const documentacion = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=510d279c911349a5ad96791676e62d93&hash=98d8ad73e4752ada56aa1206d591ec76');
    res.status(200).json({ucm: documentacion.data.data.results})
    } catch (error) {
        res.status(501).json({error})
    }
    
}
module.exports = { crearsuperHeroe, versuperHeroe, modificarsuperHeroe, eliminarsuperHeroe , consumirApi};