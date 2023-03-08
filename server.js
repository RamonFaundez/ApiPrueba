const express = require("express");
const v1Router = require("./src/v1/routes/index");

const app = express();
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 8080;

app.use('/v1/routes', v1Router);

app.listen(PORT, () => {
    console.log(`🛩 Server running on ${HOST}:${PORT}/v1/routes`);
});
