const { Comment } = require('../models');
// removed auto-incremented id
const comment = [
    {
        post_id: 1,
        user_id: 3,
        body: "Great explanation!"
    },
    {
        post_id: 1,
        user_id: 1,
        body: "Agreed, couldn't have said it better myself."
    },
    {
        post_id: 2,
        user_id: 2,
        body: "Love this!"
    },
    {
        post_id: 3,
        user_id: 3,
        body: "I could browse this site all day."
    },
]

const seedComments = () => Comment.bulkCreate(comment);

module.exports = seedComments;