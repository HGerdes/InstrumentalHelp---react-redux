'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    instrumentId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    helpful: DataTypes.INTEGER,
    unhelpful: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {
      foreignKey:"userId"
    })

    Review.belongsTo(models.Instrument, {
      foreignKey:"instrumentId"
    })
  };
  return Review;
};
