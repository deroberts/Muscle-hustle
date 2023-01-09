const router = require("express").Router();
const { User, Review, ReviewComment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      include: {
        model: ReviewComment,
        as: "reviews",
        attributes: ["user_id", "reply"]
      }
    });
    // const reviews = reviewData.map((review) => review.get({ plain: true }));
    const reviews = [
      {
        name: "awesome review",
        body: "dude this car is sick let's go"
      }
    ];
    const isLoggedIn = req.session.logged_in;
    console.log(isLoggedIn);
    res.render("homepage", { reviews });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
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
