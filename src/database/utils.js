const fs = require("fs");

const saveToDatabase = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8",
    });
};

const setTimeStamp = () => {
    const date = new Date().toLocaleString("en-CL", { timeZone: "America/Santiago"});
    const dt = Date.parse(date) / 1000;
    return dt;
};

module.exports = {
    saveToDatabase,
    setTimeStamp,
};
