const router = require('express').Router()
const FruitController = require('../controllers/fruitController')

router.get('/', FruitController.getFruit)
router.post('/', FruitController.postFruit)
router.put('/:id', FruitController.putFruit)
router.delete('/:id', FruitController.deleteFruit)

module.exports = router
