const express = require('express');
const router = express.Router();

//@route GET api/auth
//@dec test route
//@access Public
router.get('/', (req, res) => {
  res.send('auth router');
});

module.exports = router;
