const express = require('express');
const router = express.Router();

const Message = require('../models/Message.js');

/* GET forum. */
router.get('/', (req, res, next) => {
    res.render('forum/index', { messagesTable: Message.list() });
});

/* POST add forum. */
router.post('/add', (req, res, next) => {
    console.log("POST ADD FORUM");
    Message.save({ message: req.body.message, author: req.body.author });
    res.redirect('/forum');
});

module.exports = router;