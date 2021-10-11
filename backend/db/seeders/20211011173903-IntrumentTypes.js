'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('InstrumentTypes', [
      {
        instrumentType: 'Electric Guitar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        instrumentType: 'Bass Guitar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        instrumentType: 'Synthesizer',
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
