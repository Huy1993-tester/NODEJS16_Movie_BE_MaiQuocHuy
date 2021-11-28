"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const listUser = [...Array(10)].map((_, index) => {
      return {
        userName: `Mai Quoocs Huy ${index} `,
        email: `maiquochuy@gmail.com ${index}`,
        password: 'abc12345',
        createdAt: "2021-10-20 15:28:00",
        updatedAt: "2021-10-20 15:28:00",
      };
    });

    await queryInterface.bulkInsert("Users", listUser, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
