//@ts-check
const express = require("express");
const session = require("express-session");
const fileupload = require("express-fileupload");
const fs = require("fs");
const cors = require("cors");
const app = express();
const calculatorRoute = require("./routes/calculator");
const getCalcs = require("./routes/getCalcs");
var path = require("path");
require("./sequelize/index");

const port = 5000;

app.use(session({ secret: "shsauyhdfuashdfa" }));
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
  })
);
app.use(cors());

app.post("/calculator", calculatorRoute);
app.get("/getCalcs", getCalcs);

app.listen(port, () => {
  console.log(`Start in port: ${port}`);
});
