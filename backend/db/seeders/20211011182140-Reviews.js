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
        review: "Active pickups sound like trash honestly.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 1,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "I played this at a birthday party.  They hated it.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        instrumentId: 1,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "The best instrument I have ever played.  Would recommend to anyone who wants one.  I'd rate it a 6 if I could.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        instrumentId: 1,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Stole my girlfriend",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        instrumentId: 1,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "Such instrument.  Many wow.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        instrumentId: 1,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "What a piece of garbage.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        instrumentId: 2,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "I hate this thing so much",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        instrumentId: 2,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "Mine came with money and hope.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        instrumentId: 2,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "Was gifted to me by a man dressed in all blue.  I think he might have been an aqua zombie.  They're coming, so watch out.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        instrumentId: 2,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "It's pretty neat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 3,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Better than a big mac.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        instrumentId: 3,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "So sexy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        instrumentId: 3,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "I got married with one of these down my pants for good luck.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        instrumentId: 3,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "Played better.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        instrumentId: 3,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Mine arrived smashed in, so it's clearly the manufacturer's fault.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        instrumentId: 3,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "If I had a nickel, maybe I'd buy another",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        instrumentId: 3,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "Coffee and tea for me pleeeeeease",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        instrumentId: 3,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "If I had a nickel, maybe I'd buy another",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        instrumentId: 3,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "If I had a dime, maybe I'd buy two more",
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
        userId: 8,
        instrumentId: 4,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "As they said in the 90s, 'The 80s were last decade!'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        instrumentId: 4,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "As they said in the 00s, 'I wish it was the 90s!'",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        instrumentId: 4,
        rating: 3,
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
        userId: 4,
        instrumentId: 5,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "asi asi",
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
        userId: 9,
        instrumentId: 5,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "Bland, but not to a fault",
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
        userId: 8,
        instrumentId: 6,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Horrible horrible instrument",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        instrumentId: 6,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Gave my fingers fingeritis",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        instrumentId: 6,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "I'd rather sit on a chainsaw than hear this junk",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 6,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Guys, it's not crap, you just don't understand art",
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
        userId: 10,
        instrumentId: 7,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "Pretty great",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        instrumentId: 7,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Got one for my birthday.  I wanted something else but this was okay too.",
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
        userId: 9,
        instrumentId: 8,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Made many recordings and sounds with this baybay",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        instrumentId: 8,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "Jumpin jacks i hate this garbage",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        instrumentId: 8,
        rating: 3,
        helpful: 0,
        unhelpful: 0,
        review: "Rather sweep up a carpet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 8,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Guys I just took the best nap",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        instrumentId: 9,
        rating: 4,
        helpful: 0,
        unhelpful: 0,
        review: "I think mine is haunted",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        instrumentId: 9,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "My four year old keeps waking me up with this thing",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        instrumentId: 9,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "I think mine is also haunted but I like ghosts",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        instrumentId: 9,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "I think mine is haunted too, but the ghost is a little japanese boy and my friends keep dying.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 7,
        instrumentId: 10,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Got me so many babes in summer camp",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 8,
        instrumentId: 10,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Guitar is hard to learn so I gave up.  Therefore, 1/5.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 9,
        instrumentId: 10,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "A solid 5/7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 10,
        instrumentId: 10,
        rating: 1,
        helpful: 0,
        unhelpful: 0,
        review: "Generic piece of shit",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        instrumentId: 10,
        rating: 2,
        helpful: 0,
        unhelpful: 0,
        review: "I keep ending up with haunted instruments",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        instrumentId: 10,
        rating: 5,
        helpful: 0,
        unhelpful: 0,
        review: "Mine has seven strings, like a defect but not.  Love it.",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
