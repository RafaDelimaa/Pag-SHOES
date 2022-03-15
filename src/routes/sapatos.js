const express = require('express');
const multer = require('multer');
const storage = require('../config/multer');
const sapatosController = require('../controllers/sapatosController');


const router = express.Router();
const upload = multer({storage});

// /sapatos/cadastro [GET]
router.get('/cadastro', sapatosController.buscarPaginaCadastro);

// /sapatos [POST]
router.post('/', upload.single('imagem'), sapatosController.create);

module.exports = router;
