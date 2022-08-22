const express = require("express");

const { TodolistController } = require("./controllers");

const router = express.Router();

router.get("/todolist", TodolistController.browse);
router.get("/todolist/:id", TodolistController.read);
router.put("/todolist/:id", TodolistController.edit);
router.post("/todolist", TodolistController.add);
router.delete("/todolist/:id", TodolistController.delete);

module.exports = router;
