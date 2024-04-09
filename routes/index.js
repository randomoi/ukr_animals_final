// connect Router from express
const { Router } = require('express')
    // monnect model sequelize to work with database data
const pet = require('../models/pet')
    // define the router object by calling the Router() function
const router = Router()

// designate a variable for the information object from the database
var petsall;

// make a selection row by row from the table
pet.findAll({ where: { available: true }, raw: true }).then(pets => {
    // transfer the received information to a variable
    petsall = pets
}).catch(err => console.log(err));

// call the get method and describe the route
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        isPage: 'home',
        petsall: petsall
    })
})


// export the router object
module.exports = router