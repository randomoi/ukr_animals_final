// connect sequelize to work with database 
const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

// render to sequelize and set the model with the fields of the pet table
const adopt = sequelize.define('adopt', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    adopt_date: {
        allowNull: false,
        type: Sequelize.STRING
    },
})

// do the export
module.exports = adopt