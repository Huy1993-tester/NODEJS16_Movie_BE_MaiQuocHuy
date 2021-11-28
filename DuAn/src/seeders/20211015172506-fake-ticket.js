"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const listTicket = [...Array(10)].map((_, index) => {
      return {
        user_id: `${index}`,
        movie_id: `${index}`,
        createdAt: "2021-10-20 15:28:00",
        updatedAt: "2021-10-20 15:28:00",
      };
    });
    await queryInterface.bulkInsert("Tickets", listTicket, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tickets", null, {});
  },
};
