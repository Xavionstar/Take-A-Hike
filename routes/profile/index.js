const express = require("express");
const Hike = require("../../models/Hike");
const router = express.Router();
//const withAuth = require("../../utils/auth");

router.get("/",  async (req, res) => {
  let hikeData = await Hike.findAll();
  hikeData = hikeData.map((singleHikeData) =>
    singleHikeData.get({ plain: true })
  );
  res.render("profile", {
    hikes : hikeData,
    style: 'profile.css'
  })  
});


router.post("/",  async (req, res) => {
    await Hike.create({
      title: req.body.hiketitle,
      description: req.body.hikedescription,
      user_id: req.session.user_id,
    });
    res.redirect("back");
  });
  
  router.get("/:id",  async (req, res) => {
    let post = await Hike.findOne({
      where: {
        id: req.params.id,
      },
    });
    post = post.get({ plain: true });
    res.render("edithike", {
      post,
    });
  });
  router.put("/:id",  async (req, res) => {
    await Hike.update(
      {
        title: req.body.hiketitle,
        description: req.body.hikedescription,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.redirect("/profile");
  });
  
  router.delete('/:id', async (req, res) => {
      
       await BlogPosts.destroy({
        where: {
          id: req.params.id
        }
      })
      res.redirect("/profile");
    });
module.exports = router;
