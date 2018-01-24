const Sequelize = require('sequelize');
const sequelize = require('./db');
const User = require('./models/user');

sequelize.sync()
    .then(() => {
        return User.create({
            firstName: 'Linus',
            lastName: 'Torvalds',
            email: 'yourcodeisgarbage@torvalds.com',
            isInstructor: true
        })
    })