const router = require('express').Router();
const AuthRoutes = require('./auth.route');

router.use('/auth', AuthRoutes);

module.exports = router;