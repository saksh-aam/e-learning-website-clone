const express = require('express');
const db = require('./connection.js')
const app = express();

// Import Routes
const authRoute = require("./routes/authentication");

app.get("/", (req, res) => {
    res.send("Server is Working");
});

//Middleware
app.use(express.json()); 

//Route Middleware
app.use("/api/user", authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server is on port " + port));