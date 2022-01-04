const req = require('express/lib/request');

module.exports = {

    showLogin: (req, res) => {
        return res.render('userlogin');
    },
    login: (req, res) => {


        const { email, senha } = req.body;
        const usuarios = require('../database/usuarios.json')

        // Carregar o array de usuários (database/Usuarios.json)


        // Buscar o usuário no array pelo email digitado
        const usuario = usuarios.find(u => u.email == email && u.senha == senha);
        // Caso usuário não exista, retornar erro (fim)
        if (usuario === undefined) {
            return res.send("Senha ou email inválidos");
        }
        req.session.usuario = usuario;
        return res.redirect("/adm/usercreate");

    },
    logout: (req, res) => {
        req.session.usuario = undefined;
        res.redirect('/adm/userlogin');
    }

}
