const DB = require("./db.json");
const { saveToDatabase, setTimeStamp } = require("./utils");

const getAllusers = () => {
    try {
        return DB.users;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

const getUser = (userId) => {
    try {
        const user = DB.users.find((user) => user.id === userId);
        if (!user) {
            throw {
                status: 400,
                message: `Can't find User with the id '${userId}'`,
            };
        }
        return user;
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

const createUser = (newUser) => {
    try {
        const isAlreadyAdded =
            DB.users.findIndex((user) => user.email === newUser.email) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `User with the E-mail '${newUser.email}' already exists`,
            };
        }
        DB.users.push(newUser);
        saveToDatabase(DB);
        return newUser;
    } catch (error) {
        throw { status: 500, message: error?.message || error };
    }
};

const updateUser = (userId, changes) => {
    try {
        const indexForUpdated = DB.users.findIndex(
            (user) => user.id === userId
        );
        if (indexForUpdated === -1) {
            throw {
                status: 400,
                message: `Can't find user with the id '${userId}'`,
            };
        }
        const timestamp = setTimeStamp();
        const updatedUser = {
            ...DB.users[indexForUpdated],
            ...changes,
            updatedAt: timestamp,
        };
        DB.users[indexForUpdated] = updatedUser;
        saveToDatabase(DB);
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

const deleteUser = (userId) => {
    try {
        const indexForDeleted = DB.users.findIndex(
            (user) => user.id === userId
        );
        if (indexForDeleted === -1) {
            throw {
                status: 400,
                message: `Can't find User with the id '${userId}'`,
            };
        }
        DB.users.splice(indexForDeleted, 1);
        saveToDatabase(DB);
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error,
        };
    }
};

module.exports = {
    getAllusers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
