// connect Router from express
const { Router } = require("express");
// connect model sequelize to work with database data
const donate = require("../models/donate");
const output = require("../models/output");
// define the router object by calling the Router() function
const router = Router();

var donatesall;
var outputall;
// call the get method and describe the route
router.get("/", async(req, res) => {
    // make a request to the database and select all donation rows
    await donate
        .findAll({ raw: true })
        .then((donates) => {
            donatesall = donates;
        })
        .catch((err) => console.log(err));

    // iterate through the output and take the donation value and sum them up
    var allDonate = 0;
    for (let i = 0; i <= donatesall.length - 1; i++) {
        allDonate = allDonate + donatesall[i].amount;
    }

    // make a query to the database and select all rows of outputs
    await output
        .findAll({ raw: true })
        .then((outputs) => {
            outputall = outputs;
        })
        .catch((err) => console.log(err));

    // define variables for further amounts
    var allOutput = 0;
    var allFood = 0;
    var allDetergents = 0;
    var allVeterinary = 0;
    var allToys = 0;
    var allPremises = 0;
    // iterate over all outputs and take their sums
    for (let i = 0; i <= outputall.length - 1; i++) {
        // take the amount for further calculation
        allOutput = allOutput + outputall[i].sum;

        // now for each distribution point we form separate amounts
        if (outputall[i].target == "Food") {
            allFood = allFood + outputall[i].sum;
        }
        if (outputall[i].target == "Detergents") {
            allDetergents = allDetergents + outputall[i].sum;
        }
        if (outputall[i].target == "Veterinary Services") {
            allVeterinary = allVeterinary + outputall[i].sum;
        }
        if (outputall[i].target == "Toys") {
            allToys = allToys + outputall[i].sum;
        }
        if (outputall[i].target == "Premises maintenance") {
            allPremises = allPremises + outputall[i].sum;
        }
    }
    // deduct all withdrawals from all donations and get the current amount on the account
    allOutput = allDonate - allOutput;

    res.render("useFunds", {
        title: "Use of funds",
        isPage: "useFunds",
        // pass a formatted number with spaces for all donations and other amounts
        allDonate: new Intl.NumberFormat("ru-RU").format(allDonate),
        allOutput: new Intl.NumberFormat("ru-RU").format(allOutput),
        allFood: new Intl.NumberFormat("ru-RU").format(allFood),
        allDetergents: new Intl.NumberFormat("ru-RU").format(allDetergents),
        allVeterinary: new Intl.NumberFormat("ru-RU").format(allVeterinary),
        allToys: new Intl.NumberFormat("ru-RU").format(allToys),
        allPremises: new Intl.NumberFormat("ru-RU").format(allPremises),
    });
});

// export the router object 
module.exports = router;