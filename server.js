const express = require("express");
const cors = require("cors")
const v1PruebaRouter = require("./src/v1/routes/pruebaRoutes");

const app = express();
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use("/api/v1/routes", v1PruebaRouter);

app.listen(PORT, () => {
    console.log(`🛩 API running on ${HOST}:${PORT}/api/v1/routes`);
});
