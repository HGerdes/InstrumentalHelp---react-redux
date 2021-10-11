'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Instruments', [
      {
        userId: 1,
        manufacturerId: 1,
        typeId: 1,
        name: "Ibanez RGA 32",
        description: "Electric guitar with active pickups",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        manufacturerId: 2,
        typeId: 2,
        name: "Generic Fender Bass Guitar",
        description: "Looks like every other guitar you see in a music store",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
