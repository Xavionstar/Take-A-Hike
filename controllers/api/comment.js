const router = require('express').Router();
const { Comment, Hike, User } = require(`../../models`);

module.exports = router
// to add comment to hike by ID page use this get route. now add res.render to render comments on page. once log in is set up
// 
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

