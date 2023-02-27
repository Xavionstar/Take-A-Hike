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

router.get('/location/:loc', async (req, res) => {
    try {
        const hikesLocation = await Hike.findAll({
            where: { location: req.params.loc }
        })
        return res.status(200).json(hikesLocation)
    } catch (err) {
       return res.status(500).json(err)
    }
})

router.get('/length/:len', async (req, res) => {
    try {
        const hikesLength = await Hike.findAll({
            where: { length: req.params.len }
        })
        
        return res.status(200).json(hikesLength)
    } catch (err) {
       return res.status(500).json(err)
    }
})

router.get('/difficulty/:diff', async (req, res) => {
    try {
        const hikesDifficulty = await Hike.findAll({
            where: { difficulty: req.params.diff }
        })
        return res.status(200).json(hikesLocation)
    } catch (err) {
       return res.status(500).json(err)
    }
})

router.post('/:id', async (req, res) => {
    res.redirect('back')

});



module.exports = router