const { Chair, Booking, sequelize } = require("../../models");

const resolvers = {
  Mutation: {
    newBooking: async (parent, args) => {
      const t = await sequelize.transaction();
      console.log(args);
      try {
        await Booking.create(args, { transaction: t });
        await Chair.update(
          { status: "booked" },
          {
            where: {
              chairNum: args.chairNum,
            },
          }
        );
        await t.commit();
        return {message:"Thành công"};
      } catch (error) {
        await t.rollback();
        return {message:"Thất bại"};

      }
    },
  },
};

module.exports = {
  resolvers,
};
