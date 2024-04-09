// connect sequelize to work with the database
const Sequelize = require('sequelize')

// set variables to pass
const DB_NAME = 'ukr_animals'
const USER_NAME = 'root'
const PASSWORD = 'fjlDJ93-dkadh$'

// initialize the database by passing variables, and also explicitly indicate the host and that we are working with mysql
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

// export the object
module.exports = sequelize