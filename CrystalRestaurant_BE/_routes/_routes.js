const express = require("express");
const userRouter = require("./userRoutes.js");
//const foodRouter = require('./foodRoutes.js');

const router = express.Router();

//router.use("/food", foodRouter);
router.use("/user", userRouter);

module.exports = router;
