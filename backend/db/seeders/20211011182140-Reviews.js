'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        instrumentId: 1,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "The best instrument I have ever played.  Would recommend to anyone who wants one.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
