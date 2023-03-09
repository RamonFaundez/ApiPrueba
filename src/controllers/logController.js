const logService = require("../services/logService");

const getAllLogs = (req, res) => {
    try {
        const allLogs = logService.getAllLogs();
        res.send({ status: "OK", data: allLogs });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getUserLogs = (req, res) => {
    const {
        params: { userId },
    } = req;
    if (!userId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':userId' can not be empty" },
        });
    }
    try {
        const userLogs = logService.getUserLogs(userId);
        res.send({ status: "OK", data: userLogs });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const createLog = (req, res) => {
    const { body } = req;
    if (!body.roleId || !body.userId) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "One of the following keys is missing or is empty in request body: 'name', 'userId'",
            },
        });
        return;
    }
    const newLog = {
        userId: body.userId,
        roleId: body.roleId,
    };
    try {
        const createdLog = logService.createLog(newLog);
        res.status(201).send({ status: "OK", data: createdLog });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

module.exports = {
    getAllLogs,
    getUserLogs,
    createLog,
};
