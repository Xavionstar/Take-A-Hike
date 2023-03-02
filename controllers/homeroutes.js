const router = require('express').Router();
const { Comment, Hike, User } = require(`../models`);
//const withAuth = require("../../util/auth");

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



router.get("/profile/:id",  async (req, res) => {
    

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
    let hikeData = await Hike.findAll({
      
        where: { user_id: req.session.user_id },
      
    });
    hikeData = hikeData.map((singleHikeData) =>
      singleHikeData.get({ plain: true })
    );
    res.render("profile", {
      hikes : hikeData,
      style: 'profile.css',
      logged_in: req.session.logged_in
    });
  });

  router.post("/profile", async (req, res) => {
    await Hike.create({
        name: req.body.hikename,
        description: req.body.hikedescription,
        location: req.body.hikelocation,
        difficulty: req.body.hikedifficulty,
        max_altitude: req.body.hikealtitude,
        length: req.body.hikelength,
        rating: req.body.hikerating,
        user_id: req.session.user_id,
    });
    res.redirect("back");
  });

  router.put("/profile/:id", async (req, res) => {
    await Hike.update(
      {
        name: req.body.hikename,
        location: req.body.location,
        difficulty: req.body.difficulty,
        description: req.body.hikedescription,
        
        
        max_altitude: req.body.max_altitude,
        length: req.body.length,
        rating: req.body.rating,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/profile");
  });

  router.delete("/profile/:id", async (req, res) => {
    await Hike.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/profile");
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
