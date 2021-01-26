const mongoose = require('mongoose');
const uuid = require('uuid');

const UserSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
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
