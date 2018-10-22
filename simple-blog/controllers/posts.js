const express = require('express');
const models = require('../models');

const PostsController = {
  registerRouter() {
    const router = express.Router();

    // adding route handlers
    router.get('/', this.index);
    router.post('/', this.create);

    return router;
  },
  index(req, res) {
    models.Posts.findAll()
      .then((posts) => {
        console.log(posts);
        // render using the posts view with the data: posts
        res.render('posts', { posts });
      });
  },
  create(req, res) {
    models.Posts.create({
      post: req.body.post,
      author: req.body.author
    })
    .then((post) => {
      res.redirect('/posts');
    })
    .catch((err) => {
      console.log('ERROR while creating a new post');
      res.redirect('/error');
    })
  }
};

module.exports = PostsController.registerRouter();
