const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('./../models/user');
const app = express();

//Login

app.post('/login', function (req, res) {
    let body = req.body;
    Usuario.findOne({ email: body.email }, (erro, usuarioDB)=>{
        if (erro) {
            return res.status(500).json({
                ok: false,
                role: rolesValidos,
                err: erro
            })
        }
        //Valida que el usuario exista y la contraseña coincida
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "User or password incorrect, try again"
                }
            })
        } //Compara la contraseña con la de la base de datos
        if (! bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Wrong Password"
                }
            });
        }
        // Genera el token de autenticación
        let token = jwt.sign({
            usuario: usuarioDB,
        }, process.env.SEED_AUTENTICACION, {
            expiresIn: process.env.CADUCIDAD_TOKEN
        })
        res.json({
            ok: true,
            usuario: usuarioDB,
            id: usuarioDB.id,
            token,  
        })
    })
});








module.exports = app;

