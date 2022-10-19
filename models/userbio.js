'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userBio extends Model {
    static associate(models) {
      userBio.belongsTo(models.userGame);
    }
  }
  userBio.init(
    {
      userGameId: DataTypes.INTEGER,
      dateOfBirth: DataTypes.DATEONLY,
      birthPlace: DataTypes.STRING,
      gender: DataTypes.ENUM('male', 'female'),
    },
    {
      sequelize,
      modelName: 'userBio',
    }
  );
  return userBio;
};
