'use strict'
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    let data = JSON.parse(fs.readFileSync('./fruit.json', 'utf8'))
    data = data.map((el) => {
      let tanggal = { createdAt: new Date(), updatedAt: new Date() }
      return Object.assign(el, tanggal)
    })

    return queryInterface.bulkInsert('Fruits', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Fruits', null, {})
  },
}
