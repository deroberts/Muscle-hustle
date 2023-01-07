const userroutes = require('./userroutes');
const router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');
const carRoutes = require('./car-routes');
const reviewRoutes = require('./reviewroutes');

router.use('/reviews', reviewRoutes);
router.use('/users', userroutes);
router.use('/cars', carRoutes);

module.exports = router;
