// Step 1: Import Express and create port
const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000


server.use('/', router)
server.set('view engine', 'ejs')
// Step 2: Listen...
server.listen(PORT, ()=> console.log(`Server is listening at http://localhost:${PORT}. Ctrl+C to terminate.`))