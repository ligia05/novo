const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {cb(null,__dirname + '/../public/img')},
        filename: (req, file, cb) => {cb(null, Date.now() + '-' + file.originalname)}
    }
);
const upload = multer({storage});

//Importar o PizzasController
const LojaController = require('../controllers/LojaController')
const AdmController = require('../controllers/AdmController');

const router = express.Router();


//router.get('/userlogin', AdmController.logout);
router.get('/userlogin', AdmController.showLogin);
router.post('/', AdmController.login);

// Exportar o roteador 
module.exports = router;