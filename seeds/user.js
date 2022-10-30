const { User } = require('../models');

const user = [
    {
        id:,
        name:,
        email:,
        password:
    },
    {
        id:,
        name:,
        email:,
        password:
    },
    {
        id:,
        name:,
        email:,
        password:
    },
    {
        id:,
        name:,
        email:,
        password:
    },
]

const seedUser = () => User.bulkCreate(user);

module.exports = seedUser;