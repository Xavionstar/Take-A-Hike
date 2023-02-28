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

router.get('/', async (req, res) => {
    try {
        const location = req.query.location;
        const length = req.query.length;
        const difficulty = req.query.difficulty;
        const filteredHikes = await Hike.findAll({
            where: {
                location: location,
                length: length,
                difficulty: difficulty
            }
        })
        const results = filteredHikes.map((hike) => hike.get({ plain: true }))
        res.render('viewhikes', {
            results
        });
    } catch (err) {
        return res.status(500).json(err)
    }
})



module.exports = router