'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        username: "horseMouth",
        email: "d@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "RondaldMacDondald",
        email: "r@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "SoSweaty",
        email: "S@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Taylor Swift's Left Pinky",
        email: "tay@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Prince's Ghost",
        email: "pp@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});
  }
};
