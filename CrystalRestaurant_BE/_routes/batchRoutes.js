const batchController = require("../_controller/batchController");
const express = require("express");

const batchRouter = express.Router();
batchRouter.post("/addBatch", batchController.addBatch);
batchRouter.get("/getPrice/:session", batchController.batchPrice);

module.exports = batchRouter;