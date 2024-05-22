const express = require("express");
const userRouter = require("./userRoutes.js");
//const foodRouter = require('./foodRoutes.js');
const dineRouter = require('./dineRoutes.js');

const router = express.Router();

//router.use("/food", foodRouter);
router.use("/user", userRouter);
router.use("/dine", dineRouter);

module.exports = router;
