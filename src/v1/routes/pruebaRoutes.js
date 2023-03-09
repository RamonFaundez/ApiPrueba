const express = require("express");
const router = express.Router();
const permissionController = require("../../controllers/permissionController");

router.get("/permission", permissionController.getAllPermission);

module.exports = router;
