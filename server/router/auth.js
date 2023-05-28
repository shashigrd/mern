const express = require('express');
const router = express.Router();
require('../db/connect');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('home from router');
});

router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    const user = new User({ name, email, phone, work, password, cpassword });
    user.save().then(() => {
        res.status(201).json({ msg: 'user register successfully'});
    }).catch((err) => res.send('register err:::', err));
});

router.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.send(err);
        }
        res.status(200).json(users);
    })
});

module.exports = router;
