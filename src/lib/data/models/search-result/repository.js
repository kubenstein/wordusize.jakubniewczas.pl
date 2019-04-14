import SearchResult from '.';

export const find = ({ word, url }) => SearchResult.findOne({ where: { word, url } });

export const add = searchResult => searchResult.save();

export const clear = () => SearchResult.destroy({ where: {}, truncate: true });
