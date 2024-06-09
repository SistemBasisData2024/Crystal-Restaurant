const foodController = require("../_controller/foodController");
const express = require("express");
const foodRoutes = express.Router();

foodRoutes.get("/getAll", foodController.getAllFood);
foodRoutes.post("/makeFood", foodController.createFood);
foodRoutes.post("/makeCombo/:id", foodController.createCombo);
foodRoutes.get("/getCombo/:id", foodController.getCombo);
foodRoutes.get("/getAllCombo", foodController.getAllCombo);
foodRoutes.delete("/deleteFood/:id", foodController.deleteFood);

module.exports = foodRoutes;