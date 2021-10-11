'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstrumentType = sequelize.define('InstrumentType', {
    instrumentType: DataTypes.STRING
  }, {});
  InstrumentType.associate = function(models) {
    // associations can be defined here
  };
  return InstrumentType;
};