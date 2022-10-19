'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userGameHistory extends Model {
    static associate(models) {
      userGameHistory.belongsTo(models.userGame, {});
    }
  }
  userGameHistory.init(
    {
      userGameId: DataTypes.INTEGER,
      score: DataTypes.ENUM('win', 'lose', 'draw'),
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'userGameHistory',
    }
  );
  return userGameHistory;
};
