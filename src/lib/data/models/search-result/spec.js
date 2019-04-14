import SearchResult from '.';
import { add, find } from './repository';

describe('SearchResultRepository', () => {
  const searchResult = new SearchResult({
    word: 'javascript',
    url: 'http://www.jakubniewczas.com/',
    count: 9001,
  });

  it('adds a model to db', () => {
    add(searchResult);

    const wasModelAdded = !!find({ word: 'javascript', url: 'http://www.jakubniewczas.com/' });
    expect(wasModelAdded).to.be.true();
  });

  it('finds a model', () => {
    add(searchResult);

    const findResult = find({ word: 'javascript', url: 'http://www.jakubniewczas.com/' });
    expect(findResult.count).to.be.eq(9001);
  });

  it('returns null when a model could not be found', () => {
    const result404 = find({ word: '404', url: '4-4' });
    expect(result404).to.be.eq(null);
  });
});
