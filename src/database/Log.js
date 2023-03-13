const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllLogs = () => {
    try {
        logs = DB.logs;
        if (logs.length === 0) {
            throw {
                status: 400,
                message: "Can't find logs",
            };
        }
        return logs;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getUserLogs = (userId) => {
    try {
        const logs = DB.logs.filter((log) => log.userId === userId);
        if (!logs) {
            throw {
                status: 400,
                message: `Can't find logs with the id '${userId}'`,
            };
        }
        return logs;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

const checkLogin = (newLog, user) => {
    try {
        DB.logs.push(newLog);
        saveToDatabase(DB);
        return user;
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error,
        };
    }
};

module.exports = {
    getAllLogs,
    getUserLogs,
    checkLogin,
};
