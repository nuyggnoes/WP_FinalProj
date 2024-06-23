const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const dbPath = path.join(__dirname, "database.sqlite");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
});

module.exports = { Sequelize, sequelize };
