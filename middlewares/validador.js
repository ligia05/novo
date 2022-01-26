const { check } = require('express-validator');

const validacoes = [
    check('nome')
        .notEmpty()
        .withMessage("Campo deve ser preenchido.")
        .isLength({min:2, max:60})
        .withMessage("O campo deve ter pelo menos 2 caracteres e no máximo 60")
        .bail()
    ,
    check('ingredientes')
        .notEmpty()
        .withMessage("O campo ingredientes deve ser preenchido")
        .bail()
    ,
    check('preco')
        .isNumeric()
        .withMessage("O campo preço deve ser preenchido com um valor numérico")
        .bail()
]

module.exports = validacoes;