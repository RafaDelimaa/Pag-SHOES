const express = require('express');
const sapatosController = require('../controllers/sapatosController');
const router = express.Router();

// /sapatos/cadastro [GET]
router.get('/cadastro', sapatosController.buscarPaginaCadastro);

// /sapatos [POST]
router.post('/', sapatosController.create);

module.exports = router;
