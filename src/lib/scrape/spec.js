import path from 'path';
import scrape from '.';

describe('scrape()', () => {
  const url = `file://${path.resolve(__dirname, '..', 'src', 'spec', 'fixtures', 'test-page.html')}`;

  it('returns html code of scraped url', async () => {
    const html = await scrape(url);
    expect(html).to.include('<h1>The quick brown fox jumps over the lazy dog</h1>');
  });
});
