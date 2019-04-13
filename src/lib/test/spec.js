import testFunc from '.';

describe('test function', () => {
  it('returns "hello World"', () => {
    expect(testFunc()).to.be.eq('hello World');
  });
});
