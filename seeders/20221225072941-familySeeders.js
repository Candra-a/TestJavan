'use strict';

/** @type {import('sequelize-cli').Migration} */

const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync('./family.json', 'utf-8'))

  for(let i = 0; i < data.length; i++){
    data[i].createdAt = new Date()
    data[i].updatedAt = new Date()
  }    

    return queryInterface.bulkInsert('Families', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Families', data, {});
  }
};
