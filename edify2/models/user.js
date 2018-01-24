const Sequelize = require('sequelize');
const sequelize = require('../db');
// const Announcement = require('./announcement');
// const Classnote = require('./classnote');
// const Comment = require('./comment');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }, 
  email: {
    type: Sequelize.STRING
  },
  isInstructor: {
    type: Sequelize.BOOLEAN, 
    defaultValue: false
  }
});

module.exports = User;