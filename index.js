// connect the express package
const express = require('express')

// import all routes
// page route: Home
const homeRoutes = require('./routes/index')
    // page route: Use of funds
const useFundsRoutes = require('./routes/useFunds')
    // page route: Contact
const contactRoutes = require('./routes/contact')
    // page route: Documents
const documentsRoutes = require('./routes/documents')
    // page route: Donate
const donateRoutes = require('./routes/donate')
    // page route: Gallery
const galleryRoutes = require('./routes/gallery')
    // page route: One pet
const petRoutes = require('./routes/pet')
    // page route: Privacy
const privacyRoutes = require('./routes/privacy')
    // page route: Terms
const termsRoutes = require('./routes/terms')

// create a variable that is the result of express
const app = express()

// connect database
const sequelize = require('./utils/database')

// set ejs as template engine for the project
app.set('view engine', 'ejs')

// denoting that the page templates are in the views/pages folder
app.set('views', 'views/pages')

// register that the public folder will be static for the client side of the application. The folder will store css, js and img of the front end of the application
app.use(express.static('public'))

// to analyze the incoming request, we use the method in express with the name urlencoded and pass the parameter with the extended key
app.use(express.urlencoded({ extended: true }))

// to use routes register them with app, call use method and pass our routes
// we also write prefixes for routes for more convenient interaction
// page route: Home
app.use('/', homeRoutes)
    // page route: Use of funds
app.use('/useFunds', useFundsRoutes)
    // page route: Contact
app.use('/contact', contactRoutes)
    // page route: Documents
app.use('/documents', documentsRoutes)
    // page route: Donate
app.use('/donate', donateRoutes)
    // page route: Gallery
app.use('/gallery', galleryRoutes)
    // page route: One pet
app.use('/pet', petRoutes)
    // page route: Privacy
app.use('/privacy', privacyRoutes)
    // page route: Terms
app.use('/terms', termsRoutes)

// run the listen method to listen on port 8089, but before that we establish a connection with the database, we do it through a function to track errors
async function start() {
    try {
        await sequelize.sync()
        app.listen(8089, () => {
            console.log(`Server is running on port 8089`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()