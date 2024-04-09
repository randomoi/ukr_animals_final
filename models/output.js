// connect sequelize to work with the database
const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

// render to sequelize and set the model with the fields of the output table
const output = sequelize.define('output', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    sum: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    target: {
        allowNull: false,
        type: Sequelize.STRING
    }
})

// do the export
module.exports = output