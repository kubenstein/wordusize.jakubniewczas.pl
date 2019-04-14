import SearchResult from '.';
import { add, find } from './repository';

describe('SearchResultRepository', () => {
  const searchResult = new SearchResult({
    word: 'javascript',
    url: 'http://www.jakubniewczas.com/',
    count: 9001,
  });

  it('adds a model to db', async () => {
    await add(searchResult);

    const wasModelAdded = await !!find({ word: 'javascript', url: 'http://www.jakubniewczas.com/' });
    expect(wasModelAdded).to.be.true();
  });

  it('finds a model', async () => {
    await add(searchResult);

    const findResult = await find({ word: 'javascript', url: 'http://www.jakubniewczas.com/' });
    expect(findResult.count).to.be.eq(9001);
  });

  it('returns null when a model could not be found', async () => {
    const result404 = await find({ word: '404', url: '4-4' });
    expect(result404).to.be.eq(null);
  });
});
