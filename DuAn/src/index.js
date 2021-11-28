const { ApolloServer } = require("apollo-server-express");
const path = require("path");
require("dotenv").config();
const express = require("express");
const { UploadFile } = require("./middlewares/uploadFiles");
const { userModule } = require("./modules/user/userModule");
const { movieModule } = require("./modules/movie/movieModule");
const { cinemaModule } = require("./modules/cinema/cinemaModule");
const { profileModule } = require("./modules/profile/profileModule");
const { likeModule } = require("./modules/like/likeModule");
const { CommentModule } = require("./modules/comment/commentModule");
const { chairModule } = require("./modules/chair/chairModule");
const { UtilModules } = require("./modules/utilModules/utilModules");
const { bookingModule } = require("./modules/booking/bookingModule");
async function main() {
  const app = express();
  const server = new ApolloServer({
    modules: [
      userModule,
      movieModule,
      cinemaModule,  
      chairModule,
      profileModule,
      likeModule,
      CommentModule,
      bookingModule,
      UtilModules,
    ],
    context: async ({ req }) => ({
      authScope: req.headers.authorization,
      file: req.file,
      host: req.headers.host,
    }),
  });
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(UploadFile());

  const publicPathDirectory = path.join(__dirname, "../public");
  app.use(express.static(publicPathDirectory));

  await server.start();
  server.applyMiddleware({ app, cors: true });
  const PORT = process.env.PORT || 5555;
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}

main();
