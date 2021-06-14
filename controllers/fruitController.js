const { Fruit } = require('../models')

class FruitController {
  static getFruit(req, res, next) {
    Fruit.findAll()
      .then((data) => {
        res.status(200).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }

  static postFruit(req, res, next) {
    const { name, BeratTotal, HargaPerKg } = req.body

    Fruit.create({
      name,

      BeratTotal,
      HargaPerKg,
    })
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => console.log(err.message))
  }

  static putFruit(req, res, next) {
    let id = req.params.id
    let { name, BeratTotal, HargaPerKg, HargaTotal } = req.body

    Fruit.update(
      { name, BeratTotal, HargaPerKg, HargaTotal },
      {
        where: {
          id,
        },
        returning: true,
      }
    )
      .then((data) => {
        //console.log(data)
        if (data[0] === 0) {
          next({ name: 'NotFound' })
        } else {
          res.status(200).json(data)
        }
      })
      .catch((err) => {
        next(err)
      })
  }

  static deleteFruit(req, res, next) {
    let id = req.params.id

    Fruit.destroy({
      where: { id },
    })
      .then((data) => {
        res.status(200).json({ message: 'Delete Task success' })
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = FruitController
