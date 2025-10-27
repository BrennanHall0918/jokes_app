const express = require('express')
const router = express.Router()

// http://localhost:3000 => home page
router.get('/', (req, res)=> {
    // res.send('working...') => display home page
    res.render('pages/home', {
        title: "Brennan's Joke App",
        name: "brennan's joke's app!"
    })
})

router.use('/jokes', require('./api/jokesRoutes'))

// error handling
router.use((req, res, next)=> {
    res.status(404)
    .render('pages/404', {
        title: '404 Error',
        name: '404 Error. This page does not exist...'
    })
})

module.exports = router