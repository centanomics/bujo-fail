const mongoose = require('mongoose');
const uuidv4 = require('uuid').v4();

const BulletSchema = mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
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
