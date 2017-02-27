const express = require('express')
const db = require('./config/database')
const auth = require('./config/auth')
const bodyParser = require('body-parser')
const routes = require('./routes')


const server = express()
const port = 3000


server.use([
    bodyParser.json(),
    auth.initialize()
])

server.use('/api', routes)

server.listen(port, () => console.log(`Express Listening on Port ${port}`))
