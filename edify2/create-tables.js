const User = require('./models/user');
const Announcement = require('./models/announcement');
const Classnote = require('./models/classnote');
const Comment = require('./models/comment');

User.sync({force: true})
    .then(() => {
        return Announcement.sync({force: true})
    })
    .then(() => {
        return Classnote.sync({force: true})
    })
    .then(() => {
        return Comment.sync({force: true})
    })