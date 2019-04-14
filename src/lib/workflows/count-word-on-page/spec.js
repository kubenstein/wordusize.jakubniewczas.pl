import path from 'path';
import countWordOnPageWorkflow from '.';

describe('countWordOnPageWorkflow', () => {
  const url = `file://${path.resolve(__dirname, '..', 'src', 'spec', 'fixtures', 'test-page.html')}`;

  it('returns occurrence of a given word at given url', async () => {
    expect(await countWordOnPageWorkflow('the', url)).to.be.eq(2);
    expect(await countWordOnPageWorkflow('fox', url)).to.be.eq(1);
    expect(await countWordOnPageWorkflow('404', url)).to.be.eq(0);
  });
});
