const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const dados = sequelize.define("dados", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  operation: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  result: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
});

module.exports = dados;
