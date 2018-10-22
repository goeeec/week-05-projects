const express = require('express');
const models = require('../models');

const HomeController = {
  registerRouter() {
    const router = express.Router();

    // associate the route with the function
    router.get('/', this.index);

    return router;
  },
  index(req, res) {
    // redirect to /posts
    res.redirect('/posts');
  }
};

module.exports = HomeController.registerRouter();
