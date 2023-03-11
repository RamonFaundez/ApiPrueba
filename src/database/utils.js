const fs = require("fs");

const saveToDatabase = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8",
    });
};

const setTimeStamp = () => {
    const date = new Date().toLocaleString("es-MX", { timeZone: "America/Santiago"});
    const dt = Date.parse(date);
    return dt / 1000;
};

module.exports = {
    saveToDatabase,
    setTimeStamp,
};
