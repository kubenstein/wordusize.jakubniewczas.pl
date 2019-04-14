import SearchResult from 'lib/data/models/search-result';
import { find, add } from 'lib/data/models/search-result/repository';
import scrape from 'lib/scrape';
import wordCount from 'lib/word-count';

import validateInput from './validate-input';

const countWordOnPageWorkflow = async (word, url, persist = add) => {
  const validationResult = validateInput(word, url);
  if (!validationResult.isValid) throw new Error(validationResult.errors);

  let result = await find({ word, url });
  if (result) return result.count;

  const count = wordCount(word, await scrape(url));
  result = SearchResult.build({ word, url, count });
  result = await persist(result);
  return result.count;
};

export default countWordOnPageWorkflow;
