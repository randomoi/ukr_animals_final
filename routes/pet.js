// connect Router from express
const { Router } = require("express");
const express = require("express");
// connect model sequelize to work with database data
const pet = require("../models/pet");
const adopt = require("../models/adopt");
const persons = require("../models/persons");
// create a many-to-many relationship through a joint adopt table
persons.belongsToMany(pet, { through: adopt });
pet.belongsToMany(persons, { through: adopt });

// define the router object by calling the Router() function
const router = Router();

// to analyze the incoming request, we use the method in express with the name urlencoded and pass the parameter with the extended key
const urlencodedParser = express.urlencoded({ extended: false });

// designate a variable for the information object from the database
var petsall;

// call the get method and describe the route, make it async to make requests sequentially
router.get("/:idPet", async(req, res) => {
    // make a selection by id from the table
    await pet
        .findAll({ where: { id: req.params["idPet"] }, raw: true })
        .then((pets) => {
            petsall = pets;
        })
        .catch((err) => console.log(err));

    // render the page and output parameters
    res.render("pet", {
        // we take information about the pet from the array and display it through variables
        title: petsall[0].pet_name,
        pageid: req.params["idPet"],
        isPage: "pet",
        age: petsall[0].age,
        sex: petsall[0].sex,
        breed: petsall[0].breed,
        friendliness: petsall[0].friendliness,
        energy_level: petsall[0].energy_level,
        size: petsall[0].size,
        color: petsall[0].color,
        about: petsall[0].about,
        // a string with images that are filled with a comma is converted into an array
        img: petsall[0].img.split(","),
    });
});

// process the post request from the form
router.post("/", urlencodedParser, function async(req, res) {
    if (!req.body) return res.sendStatus(400);

    // enter the pet id into the variable
    var pageid = req.body.pageid;

    // create a new user in the table, take the data from the post request
    persons
        .create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            any_text: req.body.any_text,
        })
        .then((res) => {
            // select user by id
            persons.findOne({ where: { id: res.dataValues.id } }).then((persons) => {
                if (!persons) return;
                // select pet by id
                pet.findOne({ where: { id: pageid } }).then((pet) => {
                    if (!pet) return;
                    // make a connection through an intermediate table by filling in the date of creation of the request
                    persons.addPet(pet, {
                        through: { adopt_date: JSON.stringify(res.dataValues.createdAt) },
                    });
                });
            });
        })
        .catch((err) => console.log(err));

    // send the response true that everything worked out correctly
    res.send(true);
});

// export the router object 
module.exports = router;