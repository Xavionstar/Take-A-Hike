const router = require('express').Router();
const { Comment, Hike, User } = require(`../../models`);
const withAuth = require('../../utils/auth');

module.exports = router

// req.session.user_id
router.get('/', async (req, res) => {

    try {
        const commentData = await Comment.findAll({
        where: {
            user_id: 1
        }
        });
        res.status(200).json(commentData);
        
    } catch (err) {
      console.log(err)
        res.status(500).json(err);
        
    }

});
 router.post('/:id',  async (req, res) => {

// router.post('/', withAuth, async (req, res) => {

 

    try {
      const commentData = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        // user_id: 1,
        hike_id: req.params.id
       
      });
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a comment by its `id` value
  
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  
  });
  