'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usergameroom extends Model {
    static associate(models) {
    }
  }
  usergameroom.init({
    roomCode: DataTypes.STRING,
    gameMasterUserId: DataTypes.INTEGER,
    gameGuestUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usergameroom',
  });
  return usergameroom;
};