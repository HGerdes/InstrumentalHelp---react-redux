'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instrument = sequelize.define('Instrument', {
    userId: DataTypes.INTEGER,
    manufacturerId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Instrument.associate = function(models) {

  };
  return Instrument;
};
