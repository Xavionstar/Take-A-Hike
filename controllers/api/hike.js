const router = require("express").Router();
const { Comment, Hike, User } = require(`../../models`);

router.get("hike/:id", async (req, res) => {
    let hikePost = await Hike.findOne({
        where: {
            id: req.params.id,
        },
    });
    hikePost = hikePost.get({ plain: true });
    res.render("hikePost", {
        hikePost,
    });
});


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
