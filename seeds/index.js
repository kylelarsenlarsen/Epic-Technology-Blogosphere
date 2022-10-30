const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedPost = require('./post');
const seedComments = require('./comment');

const seedDatabase = async () => {
  await sequelize.sync({force: true});
  await seedUser();
  await seedPost();
  await seedComments();

  process.exit(0);
};

seedDatabase();