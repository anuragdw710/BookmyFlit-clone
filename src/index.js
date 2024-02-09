const express = require('express');
const bodyparser = require("body-parser");

const { PORT } = require('../src/config/serverCongig');

const SetupandStartServer = async () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.listen(PORT, () => {
        console.log(`Server is lissing on ${PORT}`);
    })
}
SetupandStartServer();