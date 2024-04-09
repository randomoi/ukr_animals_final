// connect Router from express
const { Router } = require('express')
const express = require('express')
    // connect model sequelize to work database data
const pet = require('../models/pet')
const { Op } = require("sequelize");

// define the router object by calling the Router() function
const router = Router()

// to analyze the incoming request, we use the method in express with the name urlencoded and pass the parameter with the extended key
const urlencodedParser = express.urlencoded({ extended: false });

// designate a variable for the information object from the database
var petsall;

// call the get method and describe the route
router.get('/', async(req, res) => {
    // put the query string into a variable
    var typeReq = req.query.type
    var typeReqSplitAway = [];
    // if the query string is not empty, then we make a modified selection, taking into account the query from the string
    if (typeof typeReq !== 'undefined' && typeReq.length > 0) {
        // convert string to array
        var typeReqSplit = typeReq.split(',')
        typeReqSplitAway = typeReqSplit
            // make a selection based on the request by passing this request to where
        await pet.findAll({
            where: {
                type: {
                    [Op.or]: typeReqSplit
                },
                available: true
            },
            raw: true
        }).then(pets => {
            petsall = pets
        }).catch(err => console.log(err));

    } else {
        // if the query string is empty, then just select all pets
        await pet.findAll({ where: { available: true }, raw: true }).then(pets => {
            petsall = pets
        }).catch(err => console.log(err));
    }

    // display the page
    res.render('gallery', {
        title: 'Adopt the perfect pet',
        isPage: 'gallery',
        petsall: petsall,
        reqChek: typeReqSplitAway
    })
})


// process the post request from the filter
router.post("/", urlencodedParser, function async(req, res) {
    if (!req.body) return res.sendStatus(400);
    // designate the variable where we will add the request
    var text = '';

    // loop through the passed parameters and enter their string
    for (let key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            text += `${key}`;
            text += `,`;
        }
    }
    // remove comma at the end
    text = text.slice(0, -1)

    // make a redirect to the same page with only the query string, but if the string is empty (all checkboxes in the filter are unchecked), then just redirect to the page
    if (text) {
        res.redirect("/gallery?type=" + text)
    } else {
        res.redirect("/gallery")
    }

});


// export the router object 
module.exports = router