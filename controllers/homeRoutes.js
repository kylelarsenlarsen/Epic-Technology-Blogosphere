const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include: [{
            model: User,
            attributes: ['name']
        }
        ]
    })
    // .catch((err) => {
    //     res.json(err);
    // });
    console.log(postData);
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('dashboard');
        return;
    }
    res.render('login', { layout: 'secondary' })
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('dashboard');
        return;
    }
    res.render('signup', { layout: 'secondary' })
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findOne(
            {
                where: {
                    id: req.params.id
                },
                attributes: [
                    'id',
                    'title',
                    'body',
                    'date_created'
                ],
                include: [
                    User,
                    {
                        model: Comment,
                        include: [User],
                    }

                ]
            })

        const actualPost = postData.get({ plain: true });
        res.render('post', {
            actualPost,
            loggedIn: req.session.loggedIn
        });

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;