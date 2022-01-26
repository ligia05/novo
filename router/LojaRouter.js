// Importar o express
const express = require('express');
const LojaController = require('../controllers/LojaController');
const ProdutosController =require('../controllers/ProdutosController');
const router = express.Router();


router.get('/lojauser',LojaController.caminho);
router.get('/produtos', ProdutosController.busca);
module.exports = router;