// connect sequelize to work with the database
const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

// render to sequelize and set the model with the fields of the pet table
const pet = sequelize.define('pet', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    // is it available for adoption or not
    available: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    // pet type (dog or cat)
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // list of images, must be filled with commas without spaces, write only filenames or paths that go inside the img folder, without spaces
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pet_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sex: {
        type: Sequelize.STRING,
        allowNull: false
    },
    breed: {
        type: Sequelize.STRING,
        allowNull: false
    },
    friendliness: {
        type: Sequelize.STRING,
        allowNull: false
    },
    energy_level: {
        type: Sequelize.STRING,
        allowNull: false
    },
    size: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // since html text should be entered here, need to use quotes when adding it to the database
    about: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// do the export
module.exports = pet