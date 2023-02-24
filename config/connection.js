const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;


  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.API_KEY,
    process.env.API_SECRET,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );

module.exports = sequelize;