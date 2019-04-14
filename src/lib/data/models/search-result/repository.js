let db = [];

export const find = ({ word, url }) => new Promise((resolve, _reject) => {
  const result = db.filter(s => s.word === word && s.url === url)[0] || null;
  resolve(result);
});

export const add = searchResult => new Promise((resolve, _reject) => {
  db.push(searchResult);
  resolve(searchResult);
});

export const clear = () => new Promise((resolve, _reject) => {
  db = [];
  resolve();
});
