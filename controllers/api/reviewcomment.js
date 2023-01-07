const { ReviewComment } = require('../../models');
const router = require('express').Router();

//review comment routes
//id of review needs to be passed in the request body

router.post('/', async (req, res) => {
    try {
        const reviewCommentData = await ReviewComment.create(req.body);
    
        res.status(200).json(reviewCommentData);
    
    } catch (err) {
        res.status(400).json(err)
    };
    });

module.exports = router;