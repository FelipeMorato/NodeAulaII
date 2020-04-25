const express = require('express');
const users = require('./users');
const auth = require('./auth');

// * Instancia do router
const router = express.Router();



// * Rotas Base
router.use('/users', users);
router.use('/auth', auth);

module.exports = router;