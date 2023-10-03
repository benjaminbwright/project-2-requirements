const express = require("express");
require("dotenv").config();

const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
