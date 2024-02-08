const express = require('express');

const { PORT } = require('../src/config/serverCongig');

const SetupandStartServer = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server is lissing on ${PORT}`);
    })
}
SetupandStartServer();