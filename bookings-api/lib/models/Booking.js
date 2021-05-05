/*

start_date: date
end_date: date
state: "canceled" | "reserved"
total_price: decimal
created_at: datetime
updated_at: datetime

belongs_to: place
belongs_to: user

*/

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    start_date: Date,
    end_date: Date,
    state: String,
    total_price: Number,
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

const Booking = mongoose.model('Booking', schema);

module.exports = Booking;
