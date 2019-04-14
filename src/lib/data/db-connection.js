import Sequelize from 'sequelize';

const isTestEnv = () => process.env.DATABASE_URL.indexOf('test') !== -1;

const db = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  logging: !isTestEnv(),
  dialectOptions: {
    ssl: true,
  },
});

export default db;
