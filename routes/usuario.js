var express = require('express');
var usuarioController = require('../controllers/usuario');

var api = express.Router();

//Usuario
api.post('/registroUsuario', usuarioController.registroUsuario);
api.post('/login_usuario', usuarioController.login_usuario);

module.exports = api;