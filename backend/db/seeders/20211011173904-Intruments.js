'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Instruments', [
      {
        userId: 1,
        manufacturerId: 1,
        typeId: 1,
        name: "RGA 32",
        description: "Electric guitar with active pickups",
        imageSrc: "https://i.imgur.com/XqNtFvc.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        manufacturerId: 3,
        typeId: 2,
        name: "Generic Bass Guitar",
        description: "Looks like every other guitar you see in a music store",
        imageSrc: "https://i.imgur.com/mE1oAQZ.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        manufacturerId: 4,
        typeId: 3,
        name: "Hippie Acoustic Guitar",
        description: "Only play this while tripping on something",
        imageSrc: "https://i.imgur.com/fBIBgE3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        manufacturerId: 4,
        typeId: 3,
        name: "Generic Acoustic Guitar",
        description: "You can play this in a park and people will throw dollars into your open guitar case.",
        imageSrc: "https://i.imgur.com/kKIfjs3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        manufacturerId: 10,
        typeId: 5,
        name: "Keystation 49",
        description: "Midi keyboard.  Keys are unweighted but pressure sensitive.  Works very well until it doesn't work at all.",
        imageSrc: "https://i.imgur.com/zjVbqrC.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        manufacturerId: 8,
        typeId: 5,
        name: "Impact GX49",
        description: "Semi-weighted keys.  Responsive and awesome.",
        imageSrc: "https://i.imgur.com/curt35N.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        manufacturerId: 6,
        typeId: 4,
        name: "U3t",
        description: "It's a piano.  I guess that's it.  Sounds nice enough.",
        imageSrc: "https://i.imgur.com/pATLADv.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        manufacturerId: 9,
        typeId: 6,
        name: "JX-8P",
        description: "Classic synth from the 80s.  If you've ever heard an 80s song, this was used in it.",
        imageSrc: "https://i.imgur.com/UVLAr2Q.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        manufacturerId: 7,
        typeId: 6,
        name: "Poly-61",
        description: "Excellent polysynth from 1982.  It's extremely hard to find one nowadays because of a manufacturing defect.",
        imageSrc: "https://i.imgur.com/19kDqNC.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Instruments', null, {});

  }
};
