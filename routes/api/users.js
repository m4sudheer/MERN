const express = require('express');
const router = express.Router();

//@route GET api/users
//@dec test route
//@access Public
router.get('/', (req, res) => {
  res.send('user router');
});

module.exports = router;
