const API_KEY = "609d96fd9ad77dc5f8d4e2f536aece54";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // 이후 데이터 처리
  })
  .catch((error) => console.error("Error:", error));

function createMovieCard(movie) {
  const htmldiv = document.querySelector("#card");
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <span>Rating: ${movie.vote_average}</span>
        `;
  card.addEventListener("click", () => alert(`Movie ID: ${movie.id}`));
  return card;
}

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results;
    const movieContainer = document.getElementById("movie-container");
    movies.forEach((movie) => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));

//remove movie card function
function removeMovieCard() {
  const movieContainer = document.getElementById("movie-container");
  movieContainer.innerHTML = "";
}
const updateMovieCard = () => {
  console.log(object);
};
