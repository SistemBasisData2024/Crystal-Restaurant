const express = require('express');
const app = express();
const connectDB = require('./connector.js');
const PORT = process.env.PORT;
const routes = require("./_routes/_routes.js");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB.connectDB();
app.use(routes);

app.listen(PORT, () => {
    console.info("Server is running on port", PORT);
});
