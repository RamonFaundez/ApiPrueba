const { v4: uuid } = require("uuid");
const User = require("../database/User");

const getAllusers = () => {
    try {
        const allUsers = User.getAllusers();
        return allUsers;
    } catch (error) {
        throw error;
    }
};

const getUser = (userId) => {
    try {
        const user = User.getUser(userId);
        return user;
    } catch (error) {
        throw error;
    }
};

const createUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdUser = User.createUser(userToInsert);
        return createdUser;
    } catch (error) {
        throw error;
    }
};

const updateUser = (userId, changes) => {
    try {
        const updatedUser = User.updateUser(userId, changes);
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const deleteUser = (userId) => {
    try {
        const deletedUser = User.deleteUser(userId);
        return deletedUser;
    } catch (error) {
        throw error;
    }
};
module.exports = {
    getAllusers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
