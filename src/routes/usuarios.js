const express = require('express');
const multer = require('multer');
const storage = require('../config/multer');
const usuariosController = require('../controllers/usuariosController');
const { celebrate, Segments, Joi } = require('celebrate')


const router = express.Router();
const upload = multer({ storage });

// /usuarios [POST]
router.post(
  '/',
  upload.single('curriculo'),
  (request, response, next) => {
    request.abobrinha = 'teste';
    next();
  },
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().required(),
      confirmacaoSenha: Joi.string().required().valid(Joi.ref('senha'))
    }
  }),
  usuariosController.create
);


module.exports = router;
