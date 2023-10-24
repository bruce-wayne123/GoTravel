const express = require("express");
const placesRoutes = require('./routes/Places-Routes');
const usersRoutes = require("./routes/Users-Routes");
const bodyParser = require('body-parser');
const app = express();
const HttpError = require("./models/http-error");
app.use(bodyParser.json());
app.use('/api/places', placesRoutes);
app.use((req, resp, next) => {
    const error = new HttpError("Could not find this route.", 404);
    throw error;
});
app.use((error, req, resp, next) => {
    if (resp.headerSent) {
        return next(error);
    }
    resp.status(error.code || 500);
    resp.json({ message: error.message || "The application has encountered an unknown error." });
});
app.listen(5000);