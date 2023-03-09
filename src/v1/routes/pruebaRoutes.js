const express = require("express");
const router = express.Router();
const permissionController = require("../../controllers/permissionController");
const logController = require("../../controllers/logController");

router
    // logs routes
    .get("/logs", logController.getAllLogs)
    .get("/logs/:userId", logController.getUserLogs)
    .post("/logs", logController.createLog)
    // permision routes
    .get("/permission", permissionController.getAllPermission);

module.exports = router;
