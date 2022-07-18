const express = require('express');

const router = express();

const auth = require('../controllers/auth');

router.post('/register', auth.register);

module.exports = router;