const router = require('express').Router();

const commentRoutes = require('./comment');
const hikeRoutes = require('./hike');
const userRoutes = require('./user');
const postRoutes = require('./post/index');

router.use('/comment', commentRoutes);
router.use('/hike', hikeRoutes);
router.use('/user', userRoutes);
router.use('/posts', postRoutes);

module.exports = router
