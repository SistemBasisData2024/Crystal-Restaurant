const dineController = require("../_controller/dine_inController");
const express = require("express");
const dineRouter = express.Router();

dineRouter.get("/create", dineController.createSession);
dineRouter.get("/getall", dineController.getAllSession);
dineRouter.delete("/delete/:session", dineController.deleteSession);

module.exports = dineRouter;