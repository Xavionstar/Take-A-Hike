const router = require('express').Router();
const { Comment, Hike, User } = require(`../../models`);

router.get("/:id", async (req, res) => {
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

router.post('/:id', async (req, res) => {
    res.redirect('back')

});

module.exports = router