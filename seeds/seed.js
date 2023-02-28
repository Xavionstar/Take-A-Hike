const sequelize = require('../config/connection');
const { User, Hike, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const postContent of postData) {
    await Hike.create({
      ...postContent,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const commentContent of commentData) {
    await Comment.create({
      ...commentContent
      
    });
  }

  process.exit(0);
};

seedDatabase();
