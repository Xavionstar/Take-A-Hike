const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Comment extends Model {
  // checkPassword(loginPw) {
  //   return true; //bcrypt.compareSync(loginPw, this.password);
  // }
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: `user`,
        key: `id`
      }
    },
    hike_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: `hike`,
        key: `id`
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  },
);

module.exports = Comment;