const Hike = require('./Hike');
const User = require('./User');
const Comment = require('./Comment')

User.hasMany(Hike, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Hike.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Hike, {
  foreignKey: 'user_id'
});

module.exports = { Hike, User, Comment }