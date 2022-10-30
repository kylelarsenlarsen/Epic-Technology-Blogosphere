const { Post } = require('../models');

const post = [
    {
        id:,
        user_id:,
        date_created:,
        title:,
        body:
    },
    {
        id:,
        user_id:,
        date_created:,
        title:,
        body:
    },
    {
        id:,
        user_id:,
        date_created:,
        title:,
        body:
    }
]

const seedPost = () => Post.bulkCreate(post);

module.exports = seedPost;