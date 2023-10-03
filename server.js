require("dotenv").config();
const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");

const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", router);

sequelize.sync({ force: true }).then(() => {
  console.log(`Sequelize-MySQL connection established`);
  app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
  });
});
