import Genres from "./Genres";
export default function(genresArray, numberOfGenres = 3) {
  const formattedGenres = genresArray
    .slice(0, numberOfGenres)
    .map(genre => {
      return Genres.get(genre);
    })
    .join(", ");
  return formattedGenres;
}
