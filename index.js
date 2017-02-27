const express = require('express')
const models = require('./models')


const server = express()
const port = 3000


models.waterline.initialize(models.config, (err, ontology) => {
    if(err) {
        console.log(err)
    } else {
        server.listen(port, () => console.log(`Express Listening on Port ${port}`))
    }
})
