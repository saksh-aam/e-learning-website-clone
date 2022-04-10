const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'The username cannot be blank.'],
    min: 5,
  },
  email: {
    type: String,
    required: [true, 'Your email cannot be blank.'],
    min: 11,
  },
  phoneno: {
    type: Number,
    require,
    minlength: [10, 'Phone Number must be of 10 digits.'],
    max:10,
  },
  password: {
    type: String,
    required: [true, 'Your password cannot be blank.'],
        minlength: [5, 'Password must be at least 5 characters.'],
  },
  courseTaken: 
    [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'course'
        }
    }]
});

module.exports = mongoose.model("User", userSchema);
