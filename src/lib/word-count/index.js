const wordCount = (word, text) => (
  text
    .toLowerCase()
    .split(word)
    .length - 1
);

export default wordCount;
