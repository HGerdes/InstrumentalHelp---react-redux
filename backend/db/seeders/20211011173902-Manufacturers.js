'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Manufacturers', [
      {
        name: "Ibanez",
        description: "Electric guitar manufacturer founded in 1743 by George 'The Fountain' Ibanez",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gibson",
        description: "Another guitar manufacturer because there aren't enough.",
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
        name: "Martin",
        description: "I think they make acoustic guitars..",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Les Paul",
        description: "A french guy apparently developed his own brand of guitars.  Or maybe his name was just Lester.  It's an unsolved mystery.",
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
        description: "Korg makes synthesizers like you may have heard in Jump by Van Halen.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nektar",
        description: "Nektar makes keyboards mostly.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Roland",
        description: "Famous synth company.  Everyone used a Roland.  Even babies used Rolands",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "M-AUDIO",
        description: "Modern synth company.  They made a midi keyboard that randomly broke on me a while back.  It was a bummer.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Manufacturers', null, {});
  }
};
