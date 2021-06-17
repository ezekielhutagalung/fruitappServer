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
    const { name, HargaTotal, BeratTotal } = req.body

    Fruit.create({
      name,
      HargaTotal,
      BeratTotal,
    })
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => console.log(err.message))
  }

  static putFruit(req, res, next) {
    let id = req.params.id
    let { name, BeratTotal, HargaTotal } = req.body
    let HargaPerKg = HargaTotal / BeratTotal

    Fruit.update(
      { name, BeratTotal, HargaTotal, HargaPerKg },
      {
        where: {
          id,
        },
        returning: true,
      }
    )
      .then((data) => {
        // console.log(data, ' di put')
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

  static getFruitId(req, res, next) {
    let id = req.params.id

    Fruit.findByPk(id)

      .then((data) => {
        res.status(200).json(data)
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
        res.status(200).json({ message: 'Delete Fruit success' })
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = FruitController
