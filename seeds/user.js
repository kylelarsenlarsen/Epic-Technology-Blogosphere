const { User } = require('../models');

const user = [
    {
        name: "Jerry Plinkton",
        email: "duderanonymous@plinkdin.com",
        password: "Cucumber9210!"
    },
    {
        name: "xXx_HoTnEsS_xXx",
        email: "funkyarmadillo@aol.com",
        password: "password123"
    },
    {
        name: "Homeless_Stud",
        email: "wheredmyhousego@yahoomail.com",
        password: "breadlineallday!1029384756"
    },
    {
        name: "Pablo Escobar",
        email: "drugrunnin@hotmail.com",
        password: "bubblegumandhorses?0987"
    },
]

const seedUser = () => User.bulkCreate(user);

module.exports = seedUser;