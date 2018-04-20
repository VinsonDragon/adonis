"use strict";

class PostController {
  index() {
    return `List of post.`;
  }
  store() {
    return `post has been created`;
  }
  show({ params }) {
    return `you are watching post ${params.id}`;
  }
  updated({ params }) {
    return `post ${params.id} has been updated`;
  }
  destroy({ params }) {
    return `post ${params.id} has been remove`;
  }
  create({}) {
    return `create post`;
  }
  edit({ params }) {
    return `${params.id} has been edit`;
  }
}

module.exports = PostController;
