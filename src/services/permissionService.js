const Permission = require("../database/Permission.js");

const getAllPermission = () => {
    try {
        const allPermissions = Permission.getAllPermission();
        return allPermissions;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllPermission }