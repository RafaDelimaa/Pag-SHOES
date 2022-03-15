const express = require('express');
const multer = require('multer');
const storage = require('../config/multer');
const usuariosController = require('../controllers/usuariosController');


const router = express.Router();
const upload = multer({ storage });

// usuarios [PUT]
// usuarios-atualizar [PUT]

// /usuarios [POST]
router.post('/', upload.single('curriculo'), usuariosController.create);


module.exports = router;
