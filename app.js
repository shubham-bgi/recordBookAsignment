const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: `${process.env.APP_ENV}.env` });
const PORT = process.env.PORT;
require('./autheticate');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require('./routes'));

app.listen(PORT, () => {
    console.log(`Server lisntening at http://localhost:${PORT}`)
});