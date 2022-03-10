const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// usuarios [PUT]
// usuarios-atualizar [PUT]

// /usuarios [POST]
router.post('/', usuariosController.create);


module.exports = router;
