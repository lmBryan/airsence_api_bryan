const { Sequelize } = require("sequelize");

const db = new Sequelize("railway", "root", "C7Nx7uKQbqmBWa7A4Xzc", {
    host: "containers-us-west-161.railway.app",
    port: "5795",
    dialect: "mysql"
  });

  module.exports = db;