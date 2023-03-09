const express = require("express");
const router = express.Router();
const permissionController = require("../../controllers/permissionController");
const userController = require("../../controllers/userController");
const logController = require("../../controllers/logController");

router
    // user routes
    .get("/", userController.getAllusers)
    .get("/:userId", userController.getUser)
    .post("/", userController.createUser)
    .patch("/:userId", userController.updateUser)
    .delete("/:userId", userController.deleteUser)
    // logs routes
    .get("/logs", logController.getAllLogs)
    .get("/logs/:userId", logController.getUserLogs)
    .post("/logs", logController.createLog)
    // permision routes
    .get("/permission", permissionController.getAllPermission);

module.exports = router;
