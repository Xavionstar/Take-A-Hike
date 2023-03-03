const router = require('express').Router();
const { Comment, Hike, User } = require(`../../models`);
const withAuth = require('../../utils/auth');

module.exports = router


router.get('/', async (req, res) => {

    try {
        const commentData = await Comment.findAll({
        where: {
            user_id: req.session.user_id
        }
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }

});

// router.post('/', withAuth, async (req, res) => {

  router.post('/',  async (req, res) => {
    console.log(req.body)
    try {
      const commentData = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        hike_id: req.params.id
      });
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  