const wordCount = (word, text) => (
  text
    .toLowerCase()
    .split(' ')
    .filter(w => w === word)
    .length
);

export default wordCount;
