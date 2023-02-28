const router = require('express').Router();

// const commentRoutes = require('./comment');
const hikeRoutes = require('./hike');
// const userRoutes = require('./user');

// router.use('/comment', commentRoutes);
router.use('/hike', hikeRoutes);
// router.use('/user', userRoutes);

module.exports = router
