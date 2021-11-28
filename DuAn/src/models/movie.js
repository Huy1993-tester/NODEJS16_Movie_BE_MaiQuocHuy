"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.hasOne(models.Like, {
        foreignKey: "movie_id",
      });
      this.hasOne(models.Comment, {
        foreignKey: "movie_id",
      });
      this.hasOne(models.Booking, {
        foreignKey: "movie_id",
      });
    }
  }
  Movie.init(
    {
      flim: DataTypes.STRING,
      trailer: DataTypes.STRING,
      decription: DataTypes.STRING,
      evaluate: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
