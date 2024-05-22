const userController = require("../_controller/userController.js");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/login", userController.login);
userRouter.post("/signup", userController.signUp);
userRouter.put("/update/:id", userController.updateUser);

module.exports = userRouter;