const express = require("express");
const examplesController = require("./examples.controller");

const examplesRouter = express.Router();

examplesRouter.post("/", examplesController.createExample);
examplesRouter.get("/", examplesController.getExample);
examplesRouter.get("/:id", examplesController.getExample);
examplesRouter.put("/:id", examplesController.updateExample);
examplesRouter.delete("/:id", examplesController.deleteExample);

module.exports = examplesRouter;
