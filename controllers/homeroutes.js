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
    let results = await Hike.findAll();
    results = results.map((result) =>
        result.get({ plain: true })
    );
    res.render("viewhikes", {
        posts: results
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

  // <====== harrys filter code ======>
router.get('/filter', async (req, res) => {
  try {
      const hikelocation = req.query.location;
      const length = req.query.length;
      const difficulty = req.query.difficulty;
      let filter={}
      if (hikelocation) {filter.location = req.query.location};
      if (length) {filter.length = req.query.length};
      if (difficulty) {filter.difficulty = req.query.difficulty};
      const filteredHikes = await Hike.findAll({
          where: filter
      })
      const posts = filteredHikes.map((hike) => hike.get({ plain: true }))
      res.status(200).render('viewhikes', {
          posts: posts
      })
      // console.log(posts)
      // return res.status(200).json(posts)
  } catch (err) {
      return res.status(500).json(err)
  }
});

module.exports = router
