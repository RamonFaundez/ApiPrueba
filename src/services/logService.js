const { v4: uuid } = require("uuid");
const Log = require("../database/Log");
const { setTimeStamp } = require("../database/utils");
const DB = require("../database/db.json");
const bcrypt = require("bcrypt");

const getAllLogs = () => {
    try {
        const allLogs = Log.getAllLogs();
        return allLogs;
    } catch (error) {
        throw error;
    }
};

const getUserLogs = (userId) => {
    try {
        const userLogs = Log.getUserLogs(userId);
        return userLogs;
    } catch (error) {
        throw error;
    }
};

const checkLogin = (credentials) => {
    try {
        const user = DB.users.find((user) => {
            return (
                credentials.email === user.email &&
                bcrypt.compareSync(credentials.password, user.password)
            );
        });
        if (!user) {
            throw {
                status: 400,
                message: "The credentials are not correct. Log failed",
            };
        }
        const timestamp = setTimeStamp();
        const logToInsert = {
            userId: user.id,
            id: uuid(),
            createdAt: timestamp,
        };
        const createdLog = Log.checkLogin(logToInsert,user);
        return createdLog;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllLogs,
    getUserLogs,
    checkLogin,
};
