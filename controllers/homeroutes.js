const router = require('express').Router();
const { Comment, Hike, User } = require(`../models`);

router.get("/", async (req, res) => {
    res.render("homepage");
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

router.get('/login', (req, res) => {
  res.render('login')
  });

module.exports = router