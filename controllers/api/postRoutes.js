const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            body: req.body.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/', withAuth, async (req, res) => {
    try {
        Post.update({
            title: req.body.title,
            body: req.body.body,
        },
            {
                where: {
                    id: req.body.id,
                }
            })
        res.status(400).json(err);
    } catch (results) {
        res.status(200).json(results);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;