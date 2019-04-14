import Sequelize from 'sequelize';
import db from 'lib/data/db-connection';

const SearchResult = db.define('search_results', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: Sequelize.STRING,
  word: Sequelize.STRING,
  count: Sequelize.INTEGER,
});

export default SearchResult;
