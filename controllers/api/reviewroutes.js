const { Review } = require("../../models");
const router = require("express").Router();
const { ReviewComment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const reviewData = await Review.create( {
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//reply comment section below

router.post('/comment', async (req, res) => {
  try {
      const newComment = {
        //need the user and review id to be strings
          user_id: parseInt(req.session.user_id),
          review_id: parseInt(req.body.review_id),
          reply: req.body.reply
      }
      const reviewCommentData = await ReviewComment.create(newComment);
      console.log(reviewCommentData);
  
      res.status(200).json(reviewCommentData);
  
  } catch (err) {
      res.status(400).json(err)
  };
  });


module.exports = router;
