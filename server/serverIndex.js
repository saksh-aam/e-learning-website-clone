const express = require('express');
const db = require('./connection.js')
const app = express();
const cors = require('cors');
// Import Routes
const authRoute = require("./routes/authentication");
const tutorialRoute = require("./routes/getData")

app.get("/", (req, res) => {
    res.send("Server is Working");
});
app.use(cors());
//Middleware
app.use(express.json());

//Route Middleware
app.use("/api/user", authRoute);
app.use("/all", tutorialRoute);
app.use(tutorialRoute);
app.use("/enrollcourse",tutorialRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is on port " + port));