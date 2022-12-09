var express = require('express');
var router = express.Router();
const { crearsuperHeroe, versuperHeroe, modificarsuperHeroe, eliminarsuperHeroe } = require("../controllers/indexControllers")
const { validarId } = require("../middlewares/validarId")
const { check } = require("express-validator")




router.post('/crear', [
    check("nombre").notEmpty().withMessage("Nombre de superHeroe es requerido").isLength({ min: 3, max: 20 }),
    check("destreza").notEmpty().withMessage("Dato de destreza es requerido"),
    check("altura").notEmpty().withMessage("Dato de altura es requerido"),
    check("debilidad").notEmpty().withMessage("Dato de debilidad es requerido"),
    check("tiene poderes").notEmpty().withMessage("Dato de tiene poderes es requerido"),
    check("rival").notEmpty().withMessage("Dato de rival es requerido"),
], crearsuperHeroe)



router.get('/ver', versuperHeroe)
router.get('/ver/:id', validarId)


router.put('/modificar/:id', validarId, [
    check("nombre").notEmpty().withMessage("Nombre de superHeroe es requerido").isLength({ min: 3, max: 20 }),
    check("destreza").notEmpty().withMessage("Dato de destreza es requerido"),
    check("altura").notEmpty().withMessage("Dato de altura es requerido"),
    check("debilidad").notEmpty().withMessage("Dato de debilidad es requerido"),
    check("tiene poderes").notEmpty().withMessage("Dato de tiene poderes es requerido"),
    check("rival").notEmpty().withMessage("Dato de rival es requerido"),
],validarId, modificarsuperHeroe)


router.delete('/borrar/:id', validarId, eliminarsuperHeroe)

router.get('/apiExterna', consumirApi)

module.exports = router;
