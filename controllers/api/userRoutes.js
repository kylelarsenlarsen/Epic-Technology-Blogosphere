const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            res.status(200).json(userData);
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            },
        });
        
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Password or email is invalid.' });
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);
        
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Password or email is invalid.' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = userData.id;
            req.session.name = userData.name;
            res.json({ user: userData, message: 'You are logged in!' });
        });

    } catch (err) {
        res.status(400).json({ message: "error loggin in"});
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;