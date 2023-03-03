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



module.exports = router;

