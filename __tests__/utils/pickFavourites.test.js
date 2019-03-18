import { pickFavourites } from '../../src/utils';
import originalFeed from './sampleFeeds/original.json';
import sortedFeed from './sampleFeeds/sorted.json';
import programFilteredFeed from './sampleFeeds/programFiltered.json';
import releaseFilteredFeed from './sampleFeeds/releaseFiltered.json';
import truncatedFeed from './sampleFeeds/truncated.json';

describe('utils pickFavourites fn', () => {
  it('should sort feed w/o options', () => {
    const picked = pickFavourites(originalFeed);
    expect(JSON.stringify(picked)).toBe(JSON.stringify(sortedFeed));
  });

  it('should filter feed by programType', () => {
    const picked = pickFavourites(originalFeed, { programType: 'series' });
    expect(JSON.stringify(picked)).toBe(JSON.stringify(programFilteredFeed));
  });

  it('should filter feed by releaseYear', () => {
    const picked = pickFavourites(originalFeed, { releaseYear: 2016 });
    expect(JSON.stringify(picked)).toBe(JSON.stringify(releaseFilteredFeed));
  });

  it('should truncate feed by limit', () => {
    const picked = pickFavourites(originalFeed, { limit: 4 });
    expect(JSON.stringify(picked)).toBe(JSON.stringify(truncatedFeed));
  });
});
