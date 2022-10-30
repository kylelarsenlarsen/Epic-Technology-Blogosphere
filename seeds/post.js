const { Post } = require('../models');

const post = [
    {
        user_id: 2,
        date_created: "09/15/2022",
        title: "Benefit of using MVC",
        body: "MVC, short for Model, View, and Controller, is a methodology or architectural pattern used for efficiently relating the user interface to underlying data models and organizing to relate the application code. MVC is primarily used to separate an application into three main components: Model, View, and Controller."
    },
    {
        user_id: 4,
        date_created: "12/02/1993",
        title: "Difference between Authentication and Authorization",
        body: "Both Authentication and Authorization area units are utilized in respect of knowledge security that permits the safety of an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each of the terms area units is completely different with altogether different ideas. whereas indeed, they're usually employed in an equivalent context with an equivalent tool, they're utterly distinct from one another. In the authentication process, the identity of users is checked for providing the access to the system. While in the authorization process, a person's or user's authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas the authorization process is done after the authentication process."
    },
    {
        user_id: 1,
        date_created: "01/31/2022",
        title: "Object Relational Mapping",
        body: "ORM in computer science is a programming technique for converting data between type systems using object-oriented programming languages. This creates, in effect, a virtual object database that can be used from within the programming language. There are both free and commercial packages available that perform object relational mapping, although some programmers opt to construct their own ORM tools."
    }
]

const seedPost = () => Post.bulkCreate(post);

module.exports = seedPost;