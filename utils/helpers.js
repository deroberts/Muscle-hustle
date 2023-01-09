const helpers = {
  toLower: (str) => str.toLowerCase(),
  toUpper: (str) => str.toUpperCase(),
  filterUsers: (usersArray) => {
    return usersArray
      .filter((user) => user.posts.length)
      .map((filteredUser) => (filteredUser.active = true));
  }
};

module.exports = helpers;
