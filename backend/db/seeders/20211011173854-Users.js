'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
        username: "RondaldMacDondald",
        email: "d@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Groomarce",
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
        email: "pg@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Freddie Mercury's Ghost",
        email: "fm@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Taco",
        email: "t@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Taylor Swift's right ear",
        email: "tsre@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Jurp",
        email: "jr@email.com",
        hashedPassword: bcrypt.hashSync("password",10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Sleepy",
        email: "sle@email.com",
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
