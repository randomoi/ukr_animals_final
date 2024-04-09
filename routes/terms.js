// connect Router from express
const { Router } = require('express')

// define the router object by calling the Router() function
const router = Router()



// call the get method and describe the route
router.get('/', (req, res) => {
    res.render('terms', {
        title: 'Terms',
        isPage: 'terms'
    })
})


// export the router object
module.exports = router