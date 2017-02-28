const router = require('express').Router()


router.use((req, res) => {
    req.response
        .then(result => res.send(result))
        .catch(result =>res.send(result))
})


module.exports = router
