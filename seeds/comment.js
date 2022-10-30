const { Comment } = require('../models');

const comment = [
    {
        id: 1,
        post_id:,
        user_id:,
        date_created:
        body: ""
    },
    {
        id: 2,
        post_id:,
        user_id:,
        date_created:
        body: ""
    },
    {
        id: 3,
        post_id:,
        user_id:,
        date_created:
        body: ""
    },
    {
        id: 4,
        post_id:,
        user_id:,
        date_created:
        body: ""
    },
]

const seedComments = () => Comment.bulkCreate(comment);

module.exports = seedComments;