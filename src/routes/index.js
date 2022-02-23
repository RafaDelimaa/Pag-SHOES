const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

/* GET home page. */
router.get('/', mainController.index);

router.get('/trabalhe-conosco', function (req, res, next) {
  res.render('formulario', { title: 'Express' });
});

module.exports = router;
