const { Review } = require('../../models');
const router = require('express').Router();

 router.post('/', async (req, res) => {
    try {
        const reviewData = await Review.create(req.body);
    
    
          res.status(200).json(reviewData);
   
      } catch (err) {
        res.status(400).json(err)
      };
    });
module.exports = router;
