require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { Hike } = require('../models');

const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//     cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
//     api_key: `${process.env.CLOUDINARY_API_KEY}`,
//     api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
//     secure: true,
//   });
cloudinary.config({
    cloud_name: 'dtiagztwn',
    api_key: '315378494241385',
    api_secret: '6xKda0HjrItiwevePlGeccd7hUY',
    secure: true,
  });

  const createPost = async (req, res) => {
    // Get the path for the uploaded image that is provided by the multer middleware
    const imagePath = req.file.path;
    try {
      // upload the image to cloudinary
      const image = await cloudinary.uploader.upload(imagePath); 
  
     // create the post on my database
      await Hike.create({
        name: req.body.name, 
        location: req.body.location,
        difficulty: req.body.difficulty, 
        description: req.body.description,
        max_altitude: req.body.max_altitude,
        length: req.body.length,
        rating: req.body.rating,
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
};

  
  module.exports = {
    createPost,
  };
  