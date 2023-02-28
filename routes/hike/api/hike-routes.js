const express = require("express");
const router = express.Router();
const { Hike, Comment } = require("../../models/Index");


router.get('/', async (req, res) => {
  // find all categories
  

  try {
    const hikeData = await Hike.findAll({
      
    });
    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  

  try {
    const hikeData = await Hike.findByPk(req.params.id, {
      
      include: [{ model: Comment  }]
    });

    if (!hikeData) {
      
      res.status(404).json({ message: 'No hike found with this id!' });
      return;
    }

    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new hike
  try {
    const hikeData = await Hike.create(req.body);
    res.status(200).json(hikeData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Hike.update(
    {
      // All the fields you can update and the data attached to the request body.
      hike_name: req.body.name,
      hike_location: req.body.location,
      hike_difficulty: req.body.difficulty,
      hike_description: req.body.description,
      hike_max_altitude: req.body.max_altitude,
      hike_length: req.body.length,
      hike_rating: req.body.rating

    },
    {
      // Gets a hike based on the hike id given in the request parameters
      where: {
        id: req.params.id,
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

router.delete('/:id', async (req, res) => {
  // delete a hike by its `id` value

  try {
    const hikeData = await Hike.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!hikeData) {
      res.status(404).json({ message: 'No hike found with this id!' });
      return;
    }

    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
