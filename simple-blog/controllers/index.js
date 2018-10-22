const express = require('express');
const router = express.Router();

// use home.js at /
router.use('/', require('./home'));
// use posts.js at /posts
router.use('/posts', require('./posts'));


module.exports = router;
