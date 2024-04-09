// connect Router from express
const { Router } = require("express");
const express = require("express");
// connect model sequelize to work with database data 
const donate = require("../models/donate");

// define the router object by calling the Router() function
const router = Router();

// to analyze the incoming request, we use the method in express with the name urlencoded and pass the parameter with the extended key
const urlencodedParser = express.urlencoded({ extended: false });

// call the get method and describe the route
router.get("/", (req, res) => {
    res.render("donate", {
        title: "Donate",
        isPage: "donate",
    });
});

// process the post request from the form
router.post("/", urlencodedParser, function async(req, res) {
    if (!req.body) return res.sendStatus(400);

    // create a new user in the table, take the data from the post request
    donate
        .create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            amount: req.body.amount,
            card_number: req.body.card_number,
            month: req.body.month,
            year: req.body.year,
        })
        .then((res) => {})
        .catch((err) => console.log(err));

    // send the response true that everything worked out correctly
    res.send(true);
});

// export the router object
module.exports = router;