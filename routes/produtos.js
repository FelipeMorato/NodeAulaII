const express = require('express');

// controller
const Produtos = require('../controller/Produtos');
const produtosController = new Produtos();

// instancia do router
const router = express.Router();

router.get('/:id', produtosController.get);
router.post('/', produtosController.add);

module.exports = router;