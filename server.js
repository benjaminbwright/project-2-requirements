require("dotenv").config();
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 3600,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sessionConfig));

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", router);

app.get("*", (req, res) => {
  console.log(req.session);
  res.send("Page not found");
});

sequelize.sync({ force: true }).then(() => {
  console.log(`Sequelize-MySQL connection established`);
  app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
  });
});
