'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('InstrumentTypes', [
      {
        type: 'Electric Guitar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Bass Guitar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Synthesizer',
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
