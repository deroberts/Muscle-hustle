//models page for the review schema
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ReviewComment extends Model {}

ReviewComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "review",
        key: "id"
      }
    },
    reply: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "reviewcomment"
  }
);

module.exports = ReviewComment;
