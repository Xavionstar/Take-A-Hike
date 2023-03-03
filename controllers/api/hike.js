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



// <====== desmond ======>
router.get('api/hike/:id', async (req, res) => {
    // find one category by its `id` value


    try {
        const hikeData = await Hike.findByPk(req.params.id, {

            include: [{ model: Comment }]
        });
        console.log(hikeData)

    if (!hikeData) {
      res.status(404).json({ message: "No hike found with this id!" });
      return;
    }

    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }
});








// <====== desmond ======>
router.get("/:id", async (req, res) => {
  let hikePost = await Hike.findOne({
    where: {
      id: req.params.id,
    },
  });
  hikePost = hikePost.get({ plain: true });
  console.log(hikePost);
  res.render("hike_details", {
    hikePost,
  });
});

module.exports = router;
