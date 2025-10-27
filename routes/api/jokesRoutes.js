const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// http://localhost:3000/jokes
router.get('/', (req, res)=> {
    res.send('This works.')
})

module.exports = router