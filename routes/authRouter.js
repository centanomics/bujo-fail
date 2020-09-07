const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send({ lol: 'hi' });
});

module.exports = router;
