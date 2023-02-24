const express = require("express");
const Hike = require("../../models/Hike");
const router = express.Router();

router.get("/", async (req, res) => {
  let postData = await Hike.findAll();
  postData = postData.map((singlePostData) =>
    singlePostData.get({ plain: true })
  );
  res.render("viewhikes");
  postData;
});

module.exports = router;
