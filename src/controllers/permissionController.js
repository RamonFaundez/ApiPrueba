const permimssionService = require("../services/permissionService");

const getAllPermission = (req, res) => {
    try {
        const allPermissions = permimssionService.getAllPermission();
        res.send({ status: "OK", data: allPermissions });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

module.exports = { getAllPermission };