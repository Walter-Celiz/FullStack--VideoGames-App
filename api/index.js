const server = require("./src/app.js");
const { db } = require("./src/db.js");
const { PORT } = process.env;
const { getAllGenres } = require("./src/controllers/genresController");

// Syncing all the models at once.
try {
  db.sync({ force: true }).then(() => {
    getAllGenres();
    console.log("Genres precharged 🟢🟢🟢🟢");
    server.listen(3001, () => {
      console.log(`Server listening at Port:${PORT}!!! 🟢🟢🟢🟢`); // eslint-disable-line no-console
    });
  });
} catch (error) {
  console.log(error + "#Server not found!!! 🔴🔴🔴🔴");
}


