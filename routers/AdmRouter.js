const express = require('express');
const AdmController = require('../controllers/AdmController');

const router = express.Router();


router.get('/adm/userlogin', AdmController.logout);
router.get('/adm/userlogin', AdmController.showLogin);
router.post('/adm/userlogin', AdmController.login);

// Exportar o roteador 
module.exports = router;