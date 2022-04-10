const mongoose = require("mongoose");
const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    required:[true, 'Your Phone number cannot be blank.'],
    min:10,
  },
  password: {
    type: String,
    required: [true, 'Your password cannot be blank.'],
    min:5,
  },
  confpassword: {
    type: String,
    required: [true, 'Your password cannot be blank.'],
    min:5,
  },
  courseTaken: 
    [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'course'
        }
    }],
  tokens: [
    {
      token: {
        type: String,
        required:true
      }
    }
  ]
});

userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.confpassword = await bcrypt.hash(this.confpassword, 12);
  }
  next();
  } catch (err) {
    console.log(err);
  }
});

// arrow function is not used here as this keyword can't be used with it
userSchema.methods.generateAuthToken = async function () {
  try {
    let temptoken = jwt.sign({ _id: this._id }, process.env.TOKEN_SECRET);
    this.tokens = this.tokens.concat({ token: temptoken });
    await this.save();
    return temptoken;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = mongoose.model("User", userSchema);