"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const listMovie = [...Array(10)].map((_, index) => {
      return {
        flim: `Cuộc chiến duyệt rồng ${index}`,
        trailer: "https://youtu.be/LgTIMkqPmqQ",
        decription: "Những kẻ tìm kiếm sự bất tử",
        evaluate: 9,
        active: false,
        rap_id: "",
        createdAt: "2021-10-20 15:28:00",
        updatedAt: "2021-10-20 15:28:00",
      };
    });
    await queryInterface.bulkInsert("Movies", listMovie, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
