'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'User1',
        email: 'user1@user.com',
        password: '$2b$10$Mr7EcqXpT1NLkQs5FfKM5ejJcYbGzCjab0SI0iTPI903RPEFgWtyK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'User2',
        email: 'user2@user.com',
        password: '$2b$10$Mr7EcqXpT1NLkQs5FfKM5ejJcYbGzCjab0SI0iTPI903RPEFgWtyK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'User3',
        email: 'user3@user.com',
        password: '$2b$10$Mr7EcqXpT1NLkQs5FfKM5ejJcYbGzCjab0SI0iTPI903RPEFgWtyK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
