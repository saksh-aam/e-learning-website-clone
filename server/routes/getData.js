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
router.get('/:unqid', async (req, res) => {
    try {
        // console.log(req.params.unqid)
        const user = await User.find({email:req.params.unqid})
        return res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;