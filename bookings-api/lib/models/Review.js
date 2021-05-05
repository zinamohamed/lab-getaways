/*

rating: integer
comment: string
created_at: datetime
updated_at: datetime

belongs_to: place
belongs_to: user

*/

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    rating: Number,
    comment: String,
    place_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', schema);

module.exports = Review;
