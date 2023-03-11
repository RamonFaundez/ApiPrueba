const express = require("express");
const router = express.Router();
const permissionController = require("../../controllers/permissionController");
const userController = require("../../controllers/userController");
const logController = require("../../controllers/logController");

router
    // user routes
    .get("/", userController.getAllusers)
    .get("/logs", logController.getAllLogs)
    .get("/permission", permissionController.getAllPermission)
    .get("/logs/:userId", logController.getUserLogs)
    .get("/:userId", userController.getUser)
    .post("/", userController.createUser)
    .post("/logs", logController.createLog)
    .patch("/:userId", userController.updateUser)
    .delete("/:userId", userController.deleteUser);

module.exports = router;
