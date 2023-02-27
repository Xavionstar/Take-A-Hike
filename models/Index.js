const Hike = require('./Hike');
const User = require('./User');
const Comment = require('./Comment')

User.hasMany(Hike, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Hike.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Hike, {
  foreignKey: 'hike_id'
});

module.exports = { Hike, User, Comment }