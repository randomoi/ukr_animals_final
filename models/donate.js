// connect sequelize to work with the database
const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

// render to sequelize and set the model with the fields of the donate table
const donate = sequelize.define('donate', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // the STRING field type is used here, since the INTEGER field type has a limit on the maximum allowable number - 2147483647, so you need to use the STRING field type here
    card_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    month: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// do the export
module.exports = donate