const express = require('express');

// * controller
const Users = require('../controller/Users');
const usersController = new Users();

// * instancia do router
const router = express.Router();


router.get('/:id', usersController.get);

module.exports = router;