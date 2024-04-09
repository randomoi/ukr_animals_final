// connect sequelize to work with the database
const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

// render to sequelize and set the model with the fields of the persons table
const persons = sequelize.define('persons', {
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
    any_text: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// do the export
module.exports = persons