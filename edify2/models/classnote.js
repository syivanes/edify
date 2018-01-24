const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Classnote = sequelize.define('classnote', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }, 
    date_published: {
        type: Sequelize.DATE
    }
})

Classnote.belongsTo(User);

module.exports = Classnote;