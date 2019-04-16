const wordCount = (word, text) => (
  text
    .toLowerCase()
    .split(/[^A-Za-z]/)
    .filter(w => w === word)
    .length
);

export default wordCount;
