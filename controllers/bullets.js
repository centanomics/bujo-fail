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