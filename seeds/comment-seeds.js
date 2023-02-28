const { Comment } = require(`../models`);

const commentData = [
    {
        comment_body: `loved this`,
        user_id: 1,
        content_id: 1        
    },
    {
        comment_body: `loved this`,
        user_id: 2,
        content_id: 2
        
    },
    {
        comment_body: `loved this`,
        user_id: 3,
        content_id: 3
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;