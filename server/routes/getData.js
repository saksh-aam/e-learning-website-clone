const router = require('express').Router();
const courses = require('../models/courses');
const User = require('../models/User');
const fetchuser=require("./fetchuser")
router.get('/courses', async (req, res) => {
    courses.find({}, (err, course) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(course);
        }
    })
});
router.post('/getuser', fetchuser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId)
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;