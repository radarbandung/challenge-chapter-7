'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'userBios',
      [
        {
          userGameId: 1,
          dateOfBirth: '1993-02-10 ',
          birthPlace: 'Bandung',
          gender: 'male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: 2,
          dateOfBirth: '1973-06-02',
          birthPlace: 'Pangkep',
          gender: 'female',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userGameId: 3,
          dateOfBirth: '1962-10-11',
          birthPlace: 'Klaten',
          gender: 'male',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userBios', null, {});
  },
};
