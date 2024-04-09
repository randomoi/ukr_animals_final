// connect Router from express
const { Router } = require('express')

// define the router object by calling the Router() function
const router = Router()



// call the get method and describe the route
router.get('/', (req, res) => {
    res.render('documents', {
        title: 'Documents',
        isPage: 'documents'
    })
})


// export the router object 
module.exports = router