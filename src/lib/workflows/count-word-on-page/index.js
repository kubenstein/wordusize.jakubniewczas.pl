import SearchResult from 'lib/data/models/search-result';
import { find, add } from 'lib/data/models/search-result/repository';
import scrape from 'lib/scrape';
import wordCount from 'lib/word-count';

const countWordOnPageWorkflow = async (word, url) => {
  let result = await find({ word, url });
  if (result) return result.count;

  const count = wordCount(word, await scrape(url));
  result = new SearchResult({ word, url, count });
  result = await add(result);
  return result.count;
};

export default countWordOnPageWorkflow;
