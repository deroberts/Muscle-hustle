const userroutes = require('./userroutes');
const router = require('express').Router();
const axios = require('axios');
const cheerio = require('cheerio');
const carRoutes = require('./car-routes');
const reviewRoutes = require('./reviewroutes');
const reviewCommentRoutes = require('./reviewcomment');

router.use('/reviews', reviewRoutes);
router.use('/users', userroutes);
router.use('/cars', carRoutes);
//not sure if I need a separate route for review comments since they are nested in the review routes
router.use('/reviewcomments', reviewCommentRoutes);



module.exports = router;
