const express = require('express');
const bodyparser = require("body-parser");

const { PORT } = require('../src/config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index')

const SetupandStartServer = async () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);
    app.listen(PORT, async () => {
        console.log(`Server is lissing on ${PORT}`);
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alert: true });
        }
    })
}
SetupandStartServer();