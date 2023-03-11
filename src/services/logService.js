const { v4: uuid } = require("uuid");
const Log = require("../database/Log");
const { setTimeStamp } = require("../database/utils");

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

const createLog = (newLog) => {
    const timestamp = setTimeStamp()
    const logToInsert = {
        ...newLog,
        id: uuid(),
        createdAt: timestamp,
    };
    try {
        const createdLog = Log.createLog(logToInsert);
        return createdLog;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllLogs,
    getUserLogs,
    createLog,
};
