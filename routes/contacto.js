const { response } = require('express');
const configMensaje = require('../configMensaje');
const { validarCampos } = require('../middleware/validar-campos');
const { Router } = require('express');
const { check } = require('express-validator')



const router = Router();



router.post('/', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('email', 'el correo es obligatorio').isEmail(),
    check('mensaje', 'debe introducir un mensaje').not().isEmpty(),
    validarCampos


], (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})

module.exports = router;