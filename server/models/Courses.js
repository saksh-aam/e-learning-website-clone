const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
        Title: {
          type: String,
          required:  [true,'The course Tilte cannot be blank.'],
        },
        Description: {
            type: String,
            required:  [true,'The course description cannot be blank.'],
        },
        startDate: {
            type: Date,
            required:  [true,'The course Start Date cannot be blank.'],
        },
        endDate: {
            type: Date,
            required: [true,'The course End Date cannot be blank.'],
        },
  },
  {
    timestamps: true,
  }
);

const courseModel = mongoose.model("coursesDB", courseSchema);
module.exports = courseModel;
