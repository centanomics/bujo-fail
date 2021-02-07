const mongoose = require('mongoose');
const uuid = require('uuid');

const BulletSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  priority: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('bullets', BulletSchema);
