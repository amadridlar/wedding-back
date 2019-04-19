const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  menu: {
    type: Number,
    require: true,
  },
  bus: {
    type: Boolean,
    require: true,
  },
});

const guestModel = mongoose.model('guestModel', guestSchema);

module.exports = guestModel;
