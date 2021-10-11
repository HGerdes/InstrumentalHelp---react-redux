'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define('Manufacturer', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Manufacturer.associate = function(models) {
    Manufacturer.hasMany(models.Instrument, {
      foreignKey: "manufacturerId"
    })
  };
  return Manufacturer;
};
