const express = require("express");
const http = require("http");
const cors = require("cors");

require("dotenv").config();

const index = require("./src/routes/index");

const app = express();
app.use(cors("*"));

app.use(index);

const server = http.createServer(app);

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Listening on port ${port}`));
