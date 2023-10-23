const express = require("express");
const bodyParser = require("body-parser");
const placesRoutes = require('./routes/Places-Routes');
const usersRoutes = require("./routes/Users-Routes");
const app = express();
app.use('/api/places', placesRoutes);
app.use('/api/user', usersRoutes);
app.listen(5000);