const sequelize = require('../config/connection');
const { User, } = require('../models');

const userData = [
  {
    'name': 'justo',
    'email': 'eliseo101801@gmail.com',
    'password': 'pass321'

  },
  {
    'name': 'derek',
    'email': '123@gmail.com',
    'password': 'pass321'
  }
]


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
