'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instrument = sequelize.define('Instrument', {
    userId: DataTypes.INTEGER,
    manufacturerId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageSrc: DataTypes.TEXT

  }, {});
  Instrument.associate = function(models) {
    Instrument.hasMany(models.Review, {
      foreignKey: "instrumentId", onDelete: 'CASCADE', hooks: true
    });

    Instrument.belongsTo(models.User, {
      foreignKey: "userId"
    });

    Instrument.belongsTo(models.Manufacturer, {
      foreignKey: "manufacturerId"
    });

    Instrument.belongsTo(models.InstrumentType, {
      foreignKey: "typeId"
    })
  };
  return Instrument;
};
