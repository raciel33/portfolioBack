const { response } = require('express');
const configMensaje = require('../configMensaje');
const { validarCampos } = require('../middleware/validar-campos');
const { Router } = require('express');
const { check } = require('express-validator')



const router = Router();



router.post('/', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})

module.exports = router;