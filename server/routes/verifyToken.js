const jwt = require("jsonwebtoken");
const User = require("../model/User");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token)
    return res.status(401).send("Access denied, seems you are not loggedIn");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invaild Token");
  }
};

/* This file act as a middleware with which it act as Private Route mechanism where it checks whether the user has token and its valid or not, which he has got after loggingIn to the site.   */
