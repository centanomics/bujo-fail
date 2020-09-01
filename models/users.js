const mongoose = require('mongoose');
const uuidv4 = require('uuid').v4();

const UserSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  reset_token: {
    type: String,
    required: false,
  },
  reset_expires: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('users', UserSchema);
