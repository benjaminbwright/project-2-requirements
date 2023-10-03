const express = require("express");
const userRouter = express.Router();

const { getAllUsers } = require("../../controllers/user");

userRouter.get("/", getAllUsers);

module.exports = userRouter;
