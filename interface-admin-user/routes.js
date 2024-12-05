const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middlewares/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/', verifyToken, isAdmin, userController.getAllUsers);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, isAdmin, userController.deleteUser);

module.exports = router;
