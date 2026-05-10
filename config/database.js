const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "notes_app", 
  "root", 
  "",
   {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;