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
        type: 'Acoustic Guitar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Piano',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Keyboard',
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
      return queryInterface.bulkDelete('InstrumentTypes', null, {});

  }
};
