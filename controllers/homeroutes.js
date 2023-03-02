const router = require('express').Router();
const { Comment, Hike, User } = require(`../models`);

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

router.get("/viewhikes", async (req, res) => {
    let postData = await Hike.findAll();
    postData = postData.map((singlePostData) =>
        singlePostData.get({ plain: true })
    );
    res.render("viewhikes", {
        posts: postData
    })
});

router.get("/profile/:id",  async (req, res) => {
    let hike = await Hike.findOne({
      where: {
        id: req.params.id,
      },
    });
    hike = hike.get({ plain: true });
    res.render("edithike", {
      hike,
    });
  });

router.get("/profile",  async (req, res) => {
    let hikeData = await Hike.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    hikeData = hikeData.map((singleHikeData) =>
      singleHikeData.get({ plain: true })
    );
    console.log(hikeData)
    res.render("profile", {
      hikes : hikeData,
      style: 'profile.css'
    })  
  });

module.exports = router
