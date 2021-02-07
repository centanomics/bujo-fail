const { validationResult } = require('express-validator');

const Bullets = require('../models/bullets');

// get bullets from one userid
exports.getAllBullets = async (req, res) => {
  try {
    const bullets = await Bullets.find({ userId: req.user.id });
    res.status(200).json(bullets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

// posts a bullet

exports.addBullet = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { name, type, priority } = req.body;

  try {
    const bullet = new Bullets({
      name,
      type,
      priority,
      userId: req.user.id
    });

    const newBullet = await bullet.save();
    res.status(200).json(newBullet);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}