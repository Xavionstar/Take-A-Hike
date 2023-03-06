const router = require("express").Router();
const { Comment, Hike } = require('../../models');
const multer = require("multer");
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

// Configure multer middleware to store uploaded images in the uploads folder on our server (these will be removed later)
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
    const imagePath = req.file.path;
    try {
        // upload the image to cloudinary
        const image = await cloudinary.uploader.upload(imagePath);

        // create the post on my database
        await Hike.create({
            name: req.body.hikename,
            location: req.body.hikelocation,
            difficulty: req.body.hikedifficulty,
            description: req.body.hikedescription,
            max_altitude: req.body.hikealtitude,
            length: req.body.hikelength,
            rating: req.body.hikerating,
            imageUrl: image.secure_url,
            user_id: req.session.user_id
        });
        // Delete the uploaded image from our server
        fs.unlinkSync(imagePath, (err) => {
            if (err) {
                throw err;
            }
        });
        
        res.redirect("back");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});

//<====== desmond =======>
// get all hikes
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
// get hike by id
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
  // update a hike by its `id` value
  await Hike.update(
    {
      // All the fields you can update and the data attached to the request body.
      rating: req.body.rating,
      
    },
    {
      // Gets a hike based on the hike_id given in the request parameters
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

