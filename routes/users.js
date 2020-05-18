const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

// * controller
const Users = require('../controller/Users');
const usersController = new Users();

// * instancia do router
const router = express.Router();

router.get('/:id',verifyToken, usersController.get);
router.post('/',verifyToken, usersController.add)

module.exports = router;