'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class userGame extends Model {
    static associate(models) {
      userGame.hasOne(models.userBio), userGame.hasMany(models.userGameHistory);
    }
  }
  userGame.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'userGame',
    }
  );
  return userGame;
};
