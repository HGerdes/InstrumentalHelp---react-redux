'use strict';
module.exports = (sequelize, DataTypes) => {
  const InstrumentType = sequelize.define('InstrumentType', {
    instrumentType: DataTypes.STRING
  }, {});
  InstrumentType.associate = function(models) {
    InstrumentType.belongsTo(models.Instrument,{
      foreignkey: "typeId"
    })
  };
  return InstrumentType;
};
