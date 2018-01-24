const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');
const Classnote = require('./classnote');

const Comment = sequelize.define('comment', {
    content: {
        type: Sequelize.TEXT
    }, 
    date_published: {
        type: Sequelize.DATE
    }
})

Comment.belongsTo(User);
Comment.belongsTo(Classnote);

module.exports = Comment;