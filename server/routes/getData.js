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
router.get('/getparticularcourse/:courseid', async (req, res) => {
    try {
        const usercourse = await courses.findById(req.params.courseid)
        return res.send(usercourse)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
router.get('/:unqid', async (req, res) => {
    // console.log(req.params.unqid)
    try {
        const user = await User.find({email:req.params.unqid})
        return res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
router.put('/:unqid/:courseid', async (req, res) => {
    try {
        const updateduser = await User.findOneAndUpdate({ email: req.params.unqid }, {
            $push: {
                courseTaken:req.params.courseid
            }
        }, { new: true })
        
        // const updatedcourse = await courses.findOneAndUpdate({ _id: req.params.courseid }, {
        //     $push: {
        //         userWhoEnrolled:req.params.updateduser._id
        //     }
        // }, { new: true })
        return res.send(updateduser)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unkown Server Error");
    }
});
module.exports = router;


// writing to test the webhook response to Rocke.chat
