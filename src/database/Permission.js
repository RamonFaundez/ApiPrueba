const DB = require("./db.json");

const getAllPermission = () => {
    try {
        return DB.permission;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = { getAllPermission }