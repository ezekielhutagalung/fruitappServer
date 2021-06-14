const router = require('express').Router()
const FruitRouter = require('./fruitRouter')

router.use(FruitRouter)

module.exports = router
