'use strict'

const { Schema, model, SchemaType } = require('mongoose');


const UsuarioSchema = Schema({

    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        default: 'perfil.png',
        required: false
    },
    telefono: {
        type: String,
        required: false
    },
    genero: {
        type: String,
        required: false
    },
    f_nacimiento: {
        type: String,
        required: false
    },
    dni: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        require: true
    }

}, { collection: 'Usuario' }); //aqui podemos definir el nombre de la colection


UsuarioSchema.method('toJSON', function() {

    //extraemos __v,_id de todos los campos de mi objeto
    const { __v, ...object } = this.toObject();


    return object;
})




module.exports = model('usuario', UsuarioSchema);