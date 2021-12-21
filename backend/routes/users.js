const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');

router.post('/register', userCtrl.signUp);
router.get('/users', auth, userCtrl.getUsers);
router.post('/login', userCtrl.logIn);


module.exports = router;