const dineController = require("../_controller/dine_inController");
const express = require("express");
const dineRouter = express.Router();

dineRouter.get("/create", dineController.createSession);

module.exports = dineRouter;