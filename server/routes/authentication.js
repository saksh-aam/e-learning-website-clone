const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
  res.send("server router");
});

router.post('/register', async (req, res) => {
  const { name, email, phoneno, password, confpassword } = req.body;

  if (!name || !email || !phoneno || !password || !confpassword) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  try {
    let token;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const newuser = new User(req.body)
      
    const newregister = await newuser.save()
    if (newregister) {
      return res.status(201).json({ message: "User Register successfully" });
    }
    else {
      return res.status(500).json({error: "Failed to register"})
    }
  }
  catch (err) {
    return res.json({ error: err })
  }
});

// login route
router.post("/login", async(req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      return res.status(400).json({ error: "Email doesn't exists" });
    }
    else {
      const correctpswd = await bcrypt.compare(password, userLogin.password);
      if (correctpswd) {
        const token = await userLogin.generateAuthToken();
//         console.log(token)
        // localStorage.setItem("token",token)
        res.cookie("nameofCookie", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly:true
        })
        return res.status(200).json({ message: "User logged In successfully" });
      }
      else {
        return res.status(400).json({ error: "Password Incorrect" });
      } 
    }
  }
  catch (err) {
    return res.json({ error: err })
  }
})
module.exports = router;
