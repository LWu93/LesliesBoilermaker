const Sequelize = require('sequelize');
const db = require('../database');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  }
});

module.exports = User;
