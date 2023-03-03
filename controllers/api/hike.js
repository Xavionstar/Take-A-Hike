const router = require("express").Router();
const { Comment, Hike } = require('../../models');



//<====== desmond =======>
router.get("/", async (req, res) => {
  try {
    const hikeData = await Hike.findAll({});
    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }
});















// <====== desmond get hike by id ======>
router.get("/:id", async (req, res) => {
  let hikePost = await Hike.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: Comment }]
  });
  hikePost = hikePost.get({ plain: true });
  console.log(hikePost);
  res.render("hike_details", {
    hikePost,
  });
});

module.exports = router;

