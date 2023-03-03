const router = require("express").Router();
const { Comment, Hike, User } = require(`../../models`);



//<====== desmond =======>
router.get("/", async (req, res) => {
  try {
    const hikeData = await Hike.findAll({});
    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }
});





//<====== lincoln ======>


//   router.put('/:id', async (req, res) => {
//     // update a category by its `id` value
//     await Hike.update(
//       {
//         // All the fields you can update and the data attached to the request body.
//         hike_name: req.body.name,
//         hike_location: req.body.location,
//         hike_difficulty: req.body.difficulty,
//         hike_description: req.body.description,
//         hike_max_altitude: req.body.max_altitude,
//         hike_length: req.body.length,
//         hike_rating: req.body.rating

//       },
//       {
//         // Gets a hike based on the hike id given in the request parameters
//         where: {
//           id: req.params.id,
//         },
//       }
//     )
//       .then((updatedHike) => {
//         res.json(updatedHike);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.json(err);
//       });

//});

//<====== lincoln ======>
router.put("profile/:id", async (req, res) => {
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

module.exports = router