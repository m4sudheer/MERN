const express = require('express');
const router = express.Router();

//@route GET api/posts
//@dec test route
//@access Public
router.get('/', (req, res) => {
  res.send('posts router');
});

module.exports = router;
