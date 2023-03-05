const router = require("express").Router();
const { Comment, Hike } = require('../../models');



//<====== desmond =======>
router.get("/", async (req, res) => {
  try {
    const hikeData = await Hike.findAll({
      include: {
        model: Comment
      }
    });
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

router.put('/:hike_id', async (req, res) => {
  console.log(req.params)
  console.log(req.body)
  // update a category by its `id` value
  await Hike.update(
    {
      // All the fields you can update and the data attached to the request body.
      rating: req.body.rating,
      
    },
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        id: req.params.hike_id,
      },
    }
  )
    .then((updatedHike) => {
      res.json(updatedHike);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });

});

module.exports = router;

