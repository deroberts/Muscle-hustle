const apiroutes = require('./api');
const homeRoutes = require('./homeroutes.js');
const router = require('express').Router();

router.use('/', homeRoutes);
router.use('/api', apiroutes);

module.exports = router;
