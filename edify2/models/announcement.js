const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Announcement = sequelize.define('announcement', {
    content: {
        type: Sequelize.TEXT
    }, 
    date_published: {
        type: Sequelize.DATE
    }
})

Announcement.belongsTo(User);

module.exports = Announcement;