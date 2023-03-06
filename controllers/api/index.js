const router = require('express').Router();

const commentRoutes = require('./comment');
const hikeRoutes = require('./hike');
const userRoutes = require('./user');
<<<<<<< HEAD
// const postRoutes = require('./post');
=======

>>>>>>> 7ae10c5fad4803f1f11c68e71725fc44fe2809e3

router.use('/comment', commentRoutes);
router.use('/hike', hikeRoutes);
router.use('/user', userRoutes);
<<<<<<< HEAD
// router.use('/posts', postRoutes);
=======

>>>>>>> 7ae10c5fad4803f1f11c68e71725fc44fe2809e3

module.exports = router
