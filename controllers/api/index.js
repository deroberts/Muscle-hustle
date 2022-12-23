const userroutes = require('./userroutes');
const router = require('express').Router();

router.use('/users', userroutes);

module.exports = router;