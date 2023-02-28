const Hike = require('./Hike');
const User = require('./User');
const Comment = require('./Comment')

User.hasMany(Hike, {
  foreignKey: 'user_id',

});

User.hasMany(Comment, {
  foreignKey: 'user_id',

});

Hike.hasMany(Comment, {
  foreignKey: 'hike_id',
  onDelete: 'CASCADE'
});

Hike.belongsTo(User, {
  foreignKey: 'user_id',

});

Hike.hasMany(Comment, {
  foreignKey: 'hike_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',

});

Comment.belongsTo(Hike, {
  foreignKey: 'hike_id',
  onDelete: 'SET NULL',
  onUpdate: 'SET NULL'
});

module.exports = { Hike, User, Comment }