// Importar o express
const express = require('express');

// Importar o PizzasController
const ProdutosController = require('../controllers/ProdutosController')

// Criar roteador
const router = express.Router();

// Definir rotas às quais ele responde
router.get('/produtos', ProdutosController.listar);
///router.get('/pizzas', PizzasController.listar);
//router.get('/pizzas/:id', PizzasController.getPizza);
//router.get('/busca',PizzasController.busca);

// Exportar o roteador
module.exports = router;