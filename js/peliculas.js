document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "ef7af66c8e9bf2fa5df79bcf91663cc5";
    const tendenciasContainer = document.getElementById("tendencias-container");

    // Función para obtener las tendencias del día
    async function getTendencias() {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=es-ES`
            );
            const data = await response.json();
            displayTendencias(data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayTendencias(movies) {
        tendenciasContainer.innerHTML = "";
        movies.forEach((movie) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("card", "col-md-4", "fade-in");
            movieCard.innerHTML = `
          <a href="#">
            <div class="img1">
              <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
            </div>
            <div class="img2"></div>
            <div class="title">${movie.title}</div>
            <div class="text">${movie.overview}</div>
            <a href="#">
              <div class="catagory">Películas <i class="fas fa-film"></i></div>
            </a>
            <a href="#">
              <div class="views">${movie.vote_count} <i class="far fa-eye"></i> </div>
            </a>
          </a>
        `;
            tendenciasContainer.appendChild(movieCard);
        });
    }

    getTendencias();
});
