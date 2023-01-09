const User = require('./User');
const Review = require('./Review');
const ReviewComment = require('./Review')

// User.hasMany(ReviewComment, {
//     foreignKey: 'user_id'
// })

// Review.hasMany(ReviewComment, {
//     foreignKey: 'review_id'
// })

// ReviewComment.belongsTo(User, {
//     foreignKey: 'user_id'
// })

// ReviewComment.belongsTo(Review, {
//     foreignKey: 'review_id'
// })

module.exports = { User, Review, ReviewComment };

