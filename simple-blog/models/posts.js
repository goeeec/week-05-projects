module.exports = (sequelize, DataTypes) => {
  // name of the db table, and the columns
  // every variable requires a type
  var Posts = sequelize.define('Posts', {
    post: DataTypes.TEXT,
    author: DataTypes.STRING
  });

  // the 1-1, 1-n, n-n relationships
  Posts.associate = (models) => {
    // associations can be defined here
  }

  return Posts;
};
