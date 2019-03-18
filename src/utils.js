export const pickFavourites = (shows, options = {}) => {
  let results = shows;

  if (options.releaseYear) {
    results = shows.filter(show => show.releaseYear >= options.releaseYear);
  }

  if (options.programType) {
    results = shows.filter(show => show.programType === options.programType);
  }

  return (
    results
      .slice(0, options.limit || 21)
      // sort title alphabetically
      .sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
  );
};
