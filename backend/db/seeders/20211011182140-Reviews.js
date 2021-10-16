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
      },
      {
        userId: 2,
        instrumentId: 1,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "Such instrument.  Many wow.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        instrumentId: 1,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "What a piece of garbage.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        instrumentId: 2,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "I hate this thing so much",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 2,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "It's pretty neat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        instrumentId: 3,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Better than a big mac.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 3,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Gave me heart disease.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        instrumentId: 3,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Mine arrived smashed in, so it's clearly the manufacturer's fault.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 3,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "If I had a nickel, maybe I'd buy another",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 4,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "As they said in the 80s, 'It's the 80s!'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        instrumentId: 4,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "Such instrument.  Many wow.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        instrumentId: 5,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "Okay, so-so",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 5,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "Agree with so-so",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        instrumentId: 5,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "Pretty generic I guess but that's okay",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        instrumentId: 6,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Never seen such a piece of crap",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 6,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "It's not crap, it's art",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ,
      {
        userId: 3,
        instrumentId: 7,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Reminds me of the time my sewing teacher yelled at me for not knowing how to thread a needle",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        instrumentId: 7,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Amazing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 7,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Amazing ... at being shit",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        instrumentId: 8,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "meh",
        createdAt: new Date(),
        updatedAt: new Date()
      } ,
      {
        userId: 2,
        instrumentId: 8,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "double meh",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        instrumentId: 8,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "Could be worse",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 9,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "I think mine is haunted",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
