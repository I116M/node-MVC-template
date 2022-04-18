const express = require("express");
const app = express();

const mainRoute = require("./routes/main.route");
app.use("/main", mainRoute);

app.listen(3000, () => console.log("server started"));
