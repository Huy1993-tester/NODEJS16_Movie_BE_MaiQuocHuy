"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      this.belongsTo(models.Movie, {
        foreignKey: "movie_id",
      });
      this.belongsTo(models.Cinema, {
        foreignKey: "rap_id",
      });
    }
  }
  Booking.init(
    {
      startTime: DataTypes.STRING,
      endTime: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      payMethod: DataTypes.STRING,
      chairNum: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      movie_id: DataTypes.INTEGER,
      rap_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
