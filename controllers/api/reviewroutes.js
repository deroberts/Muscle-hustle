const { Review } = require('../../models');
const router = require('express').Router();
const { ReviewComment } = require('../../models');

 router.post('/', async (req, res) => {
    try {
        const reviewData = await Review.create(req.body);
    
    
          res.status(200).json(reviewData);
   
      } catch (err) {
        res.status(400).json(err)
      };
    });

router.post('/comments', async (req, res) => {
  console.log(req.body);
  try {
      const reviewCommentData = await ReviewComment.create(req.body);
  
      res.status(200).json(reviewCommentData);
  
  } catch (err) {
      res.status(400).json(err)
  };
  });

module.exports = router;
