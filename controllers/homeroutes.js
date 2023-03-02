const router = require('express').Router();
const { Comment, Hike, User } = require(`../models`);

router.get("/", async (req, res) => {

    res.render("homepage", { 
      logged_in: req.session.logged_in
    }); 
});

// render login form
router.get('/login', (req, res) => {
   
  res.render('login',  { 
    logged_in: req.session.logged_in
  });
});

  // render signup form
router.get('/signup',(req, res) => {

res.render('signup');
});

router.get("/viewhikes", async (req, res) => {
    let results = await Hike.findAll();
    results = results.map((result) =>
        result.get({ plain: true })
    );
    res.render("viewhikes", {
<<<<<<< HEAD
        posts: postData,
        logged_in: req.session.logged_in
    });
=======
        posts: results
    })
>>>>>>> origin/main
});

router.get("hike/:id",  async (req, res) => {
    let post = await Hike.findOne({
      where: {
        id: req.params.id,
      },
    });
    post = post.get({ plain: true });
    res.render("edithike", {
      post,
      logged_in: req.session.logged_in
    });
  });

router.get("/profile",  async (req, res) => {
    let hikeData = await Hike.findAll();
    hikeData = hikeData.map((singleHikeData) =>
      singleHikeData.get({ plain: true })
    );
    res.render("profile", {
      hikes : hikeData,
      style: 'profile.css',
      logged_in: req.session.logged_in
    });
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
