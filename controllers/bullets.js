const Bullets = require('../models/bullets');

// get bullets from one userid
exports.getAllBullets = async (req, res) => {
  try {
    const bullets = Bullets.find({ userId: req.body.userId });
    res.json(bullets)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}