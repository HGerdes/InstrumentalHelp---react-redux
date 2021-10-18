'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Instruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:"Users"}
      },
      manufacturerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:"Manufacturers"}
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{model:"InstrumentTypes"}
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      imageSrc: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Instruments');
  }
};
