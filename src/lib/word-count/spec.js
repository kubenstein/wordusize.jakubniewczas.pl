import wordCount from '.';

describe('wordCount()', () => {
  it('counts how many times a word occured in a given text', () => {
    const text = 'The quick brown fox jumps over the lazy dog';
    expect(wordCount('the', text)).to.be.eq(2);
    expect(wordCount('fox', text)).to.be.eq(1);
    expect(wordCount('404', text)).to.be.eq(0);
  });

  it('returns 0 for an empty text', () => {
    expect(wordCount('word', '')).to.be.eq(0);
  });
});
