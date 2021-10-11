'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Manufacturers', [
      {
        name: "Ibanaez",
        description: "Electric guitar manufacturer founded in 1743 by George 'The Fountain' Ibanez",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fender",
        description: "Electric guitar manufacturer founded in Fender, Michigan, by some guy.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Yamaha",
        description: "They make pianos and also motorcycles and lawnmowers",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Korg",
        description: "Korg makes synthesizers like in Jump by Van Halen",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Manufacturers', null, {});

  }
};
