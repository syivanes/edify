const Sequelize = require('sequelize');
const sequelize = new Sequelize('edify', 'owner', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;