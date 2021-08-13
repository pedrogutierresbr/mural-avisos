const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api.js");

const port = 3005;
const app = express();

app.use(express.json());

app.use("/api", apiRoute);

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
