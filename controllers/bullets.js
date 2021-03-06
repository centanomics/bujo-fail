const { validationResult } = require('express-validator');
const { updateBullet } = require('../client/src/actions/bulletActions');

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
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

// update a bullet

exports.updateBullet = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const { name, type, priority } = req.body;
  const { id } = req.params;

  try {
    // const bullet = await Bullets.findById(id);

    const bulletFields = {
      name,
      type,
      priority
    };

    const updatedBullet = await Bullets.findByIdAndUpdate(
      id,
      { $set: bulletFields },
      { new: true }
    )
    res.status(200).json(updatedBullet);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

}

// delete a bullet

exports.deleteBullet = async (req, res) => {
  const { id } = req.params;
  try {
    await Bullets.findByIdAndRemove(id);
    res.status(200).json({msg: 'bullet deleted'})
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}