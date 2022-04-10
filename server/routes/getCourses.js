const router = require('express').Router();
const courses = require('../models/courses');

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

module.exports = router;