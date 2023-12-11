const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    address: {
      building: String,
      coord: [Number],
      street: String,
      zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [
      {
        date: { type: Date },
        grade: String,
        score: Number,
      },
    ],
    name: String,
    restaurant_id: String,
  },
  { timestamps: true }
);

const Restaurant = mongoose.model('Restaurant', schema);

module.exports = Restaurant;