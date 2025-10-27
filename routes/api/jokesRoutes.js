const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 3000

// http://localhost:3000/jokes
router.get('/', (req, res)=> {
    // res.send('This works.')
    const url = `https://api.sampleapis.com/jokes/goodJokes`

    axios.get(url)
        .then(resp => console.log(resp))
        .then(res.send('Data recieved.'))
})

module.exports = router