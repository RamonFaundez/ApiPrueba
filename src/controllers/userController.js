const userService = require("../services/userService");
const bcrypt = require("bcrypt");

const getAllusers = (req, res) => {
    try {
        const allUsers = userService.getAllusers();
        res.send({ status: "OK", data: allUsers });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const getUser = (req, res) => {
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
        const user = userService.getUser(userId);
        res.send({ status: "OK", data: user });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const createUser = (req, res) => {
    const { body } = req;
    if (!body.name || !body.password || !body.email || !body.permissionId) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "One of the following keys is missing or is empty in request body: 'name', 'password', 'permissionId'",
            },
        });
        return;
    }
    const passEnc = bcrypt.hashSync(body.password, 10);
    const newUser = {
        name: body.name,
        password: passEnc,
        email: body.email,
        permissionId: body.permissionId,
    };
    try {
        const createdUser = userService.createUser(newUser);
        res.status(201).send({ status: "OK", data: createdUser });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const updateUser = (req, res) => {
    const {
        body,
        params: { userId },
    } = req;
    if (!userId || Object.keys(body).length === 0) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "One of the following keys is required and is empty in request body: 'name', 'password', 'email', 'permissionId'",
            },
        });
        return;
    }
    if (!!body.password) {
        const passEnc = bcrypt.hashSync(body.password, 10);
        body.password = passEnc;
    }
    try {
        const updatedUser = userService.updateUser(userId, body);
        res.send({ status: "OK", data: updatedUser });
    } catch (error) {
        res.status(error?.status || error).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

const deleteUser = (req, res) => {
    const {
        params: { userId },
    } = req;
    if (!userId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':userId' can not be empty" },
        });
        return;
    }
    try {
        userService.deleteUser(userId);
        res.status(204).send({ status: "OK" });
    } catch (error) {
        res.status(error?.status || 500).send({
            status: "FAILED",
            data: { error: error?.message || error },
        });
    }
};

module.exports = {
    getAllusers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
