const Sequelize = require('sequelize');
const db = require('../database');

const Kitten = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  age: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  }
});

module.exports = Kitten;
