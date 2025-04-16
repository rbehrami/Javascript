document.addEventListener("DOMContentLoaded", async function () {
  try {
    console.time("time it took:");
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=cbb92b43&s=spiderman&&page=1"
    );

    let page = 1;
    const movies = await response.json();
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = "";

    console.log("window", window);
    console.log("movies", movies);
    movies.Search.filter((item) => item.Poster != "N/A").forEach((movie) => {
      const col = document.createElement("div");
      col.className = "col-md-3 mb-4";
      col.innerHTML = "";
      col.innerHTML = `
        <div class="card h-100 p-0 m-0">
          <img class="poster-img" src="${movie.Poster}">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">
              <strong>Type:</strong> ${movie.Type}<br>
              <strong>Year:</strong> ${movie.Year}<br>
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">imdbID: ${movie.imdbID}</small>
          </div>
        </div>
      `;
      cardsContainer.appendChild(col);
    });

    const pageRight = document.querySelector(".page-right");
    const pageLeft = document.querySelector(".page-left");
    const pageElement = document.querySelector(".page");

    pageLeft.addEventListener("click", async function () {
      page -= 1;
      pageElement.innerHTML = page;
      console.log("ppage", page);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=cbb92b43&s=spiderman&&page=${page}`
      );

      const movies = await response.json();
      // querySelector(".cards-container").innerHTML = "";
      const cardsContainer = document.querySelector(".cards-container");
      cardsContainer.innerHTML = "";

      console.log("movies", movies);
      movies.Search.forEach((movie) => {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";
        col.innerHTML = "";
        col.innerHTML = `
        <div class="card h-100 p-0 m-0">
          <img class="poster-img" src="${movie.Poster}">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">
              <strong>Type:</strong> ${movie.Type}<br>
              <strong>Year:</strong> ${movie.Year}<br>
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">imdbID: ${movie.imdbID}</small>
          </div>
        </div>
      `;
        cardsContainer.appendChild(col);
      });
    });

    pageRight.addEventListener("click", async function () {
      page += 1;
      pageElement.innerHTML = page;

      console.log("ppage", page);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=cbb92b43&s=spiderman&&page=${page}`
      );

      const movies = await response.json();
      // querySelector(".cards-container").innerHTML = "";
      const cardsContainer = document.querySelector(".cards-container");
      cardsContainer.innerHTML = "";

      console.log("movies", movies);
      movies.Search.forEach((movie) => {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-4";
        col.innerHTML = "";
        col.innerHTML = `
        <div class="card h-100 p-0 m-0">
          <img class="poster-img" src="${movie.Poster}">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">
              <strong>Type:</strong> ${movie.Type}<br>
              <strong>Year:</strong> ${movie.Year}<br>
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">imdbID: ${movie.imdbID}</small>
          </div>
        </div>
      `;
        cardsContainer.appendChild(col);
      });
      console.log("window", window);
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight;

      if (atBottom) {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
      }
    });

    console.log("movies", movies.Search);
  } catch (error) {
    console.log("Error", error.message);
  }
});
