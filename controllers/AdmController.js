const session = require('express-session');

const controller = {
    showLogin: (req, res) => {
        res.render('userlogin');
    },
    login: (req, res) => {
        const usuarios = require('../database/usuarios.json');
        const {email, senha} = req.body;

        const usuario = usuarios.find( u => u.email == email && u.senha == senha);

        if(usuario === undefined){
            return res.send('Senha ou email inválidos');
        }

        req.session.usuario = usuario;
        res.redirect('/');
    },
    logout: (req, res) => {
        if(req.session.usuario !== undefined){
            req.session.usuario = undefined;
        }
        res.redirect('/adm/userlogin');
    }
}

module.exports = controller;