'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstrumentType = sequelize.define('InstrumentType', {
    type: DataTypes.STRING
  }, {});
  InstrumentType.associate = function(models) {
    InstrumentType.hasMany(models.Instrument,{
      foreignkey: "typeId"
    })
  };
  return InstrumentType;
};
