const express = require("express");
const router = express.Router();
const { Hike } = require("../../models/Index");

router.get("/:id", async (req, res) => {
  let hikePost = await Hike.findOne({
        where: {
      id: req.params.id,
    },
  });
  hikePost = hikePost.get({ plain: true });
  console.log(hikePost)
  res.render("hike_details", {
    hikePost,
  });
});

router.post('/:id', async (req, res) => {
    res.redirect('back')
    
  });

module.exports = router;

