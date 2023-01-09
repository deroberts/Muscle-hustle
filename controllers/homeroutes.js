const router = require("express").Router();
const { User, Review, ReviewComment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  console.log("========")
  try {
    const reviewData = await Review.findAll();
    const reviews = reviewData.map((review) => review.get({ plain: true }));
    reviews.forEach((review) => {
      console.log(review);
    });
   // if not logged in hide form
    res.render("homepage", {reviews, logged_in:req.session.logged_in} );
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  console.log("====profile====")
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] }
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/review", async (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }
});

module.exports = router;
