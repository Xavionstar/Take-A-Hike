const router = require('express').Router();
// const { Comment, Hike, User } = require(`../models`);

router.get("/", async (req, res) => {
    res.render("homepage");
});

// render login form
router.get('/login', (req, res) => {
    console.log("from get/login");
   
  res.render('login');
  });

  // render signup form
  router.get('/signup',(req, res) => {

  console.log("from get/signup");

res.render('signup');
});
module.exports = router;