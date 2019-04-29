const ratingGreaterOptions = [];
const ratingLessOptions = [];

(function() {
  for (let i = 1; i < 11; ++i) {
    ratingGreaterOptions.push({ value: i, label: `More Than ${i}` });
    ratingLessOptions.push({ value: i, label: `Less Than ${i}` });
  }
})();

const genreOptions = [
  { value: 28, label: "Action " },
  { value: 12, label: "Adventure " },
  { value: 16, label: "Animation " },
  { value: 35, label: "Comedy " },
  { value: 80, label: "Crime " },
  { value: 99, label: "Documentary" },
  { value: 18, label: "Drama" },
  { value: 10751, label: "Family" },
  { value: 14, label: "Fantasy" },
  { value: 36, label: "History" },
  { value: 27, label: "Horror" },
  { value: 10402, label: "Music" },
  { value: 9648, label: "Mystery" },
  { value: 10749, label: "Romance" },
  { value: 878, label: "Science Fiction" },
  { value: 10770, label: "TV Movie" },
  { value: 53, label: "Thriller" },
  { value: 10752, label: "War" },
  { value: 37, label: "Western" }
];
const sortOptions = [
  { value: "release_date.asc", label: "Release Date Asc." },
  { value: "release_date.desc", label: "Release Date Desc." },
  { value: "popularity.asc", label: "Popularity Asc." },
  { value: "popularity.desc", label: "Popularity Desc." },
  { value: "vote_average.asc", label: "Rating Asc." },
  { value: "vote_average.desc", label: "Rating Desc." }
];
export { ratingGreaterOptions, ratingLessOptions, genreOptions, sortOptions };
