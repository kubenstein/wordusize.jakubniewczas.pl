const db = [];

export const find = ({ word, url }) => (
  db.filter(s => s.word === word && s.url === url)[0] || null
);

export const add = searchResult => db.push(searchResult);
