'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstrumentType = sequelize.define('InstrumentType', {
    instrumentType: DataTypes.STRING
  }, {});
  InstrumentType.associate = function(models) {
    InstrumentType.hasMany(models.Instrument,{
      foreignkey: "instrumentId"
    })
  };
  return InstrumentType;
};
