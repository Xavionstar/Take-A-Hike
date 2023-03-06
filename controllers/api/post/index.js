const router = require("express").Router();
const multer = require("multer");
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const Hike = require('../../../models/Hike');

cloudinary.config({
    cloud_name: 'dtiagztwn',
    api_key: '315378494241385',
    api_secret: '6xKda0HjrItiwevePlGeccd7hUY',
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
        // description: req.body.description,
        max_altitude: req.body.hikealtitude,
        length: req.body.hikelength,
        rating: req.body.hikerating,
        imageUrl: image.secure_url,
      });
           // Delete the uploaded image from our server
    fs.unlinkSync(imagePath, (err) => {
      if (err) {
        throw err;
      }
    });
    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;