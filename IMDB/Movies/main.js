const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

if (movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=04ed59c56f185b34bbc4edb193bfc58c`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("h1").textContent = data.title;
            document.getElementById("p").textContent = data.overview;
            document.getElementById("movie-image").src = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;

            return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=04ed59c56f185b34bbc4edb193bfc58c`);
        })
        .then(response => response.json())
        .then(data => {
            const trailers = data.results.filter(video => video.type === 'Trailer');

            if (trailers.length > 0) {
                const firstTrailer = trailers[0];
                document.getElementById("video").src = `https://www.youtube.com/embed/${firstTrailer.key}`;
            }

            if (trailers.length > 1) {
                const secondTrailer = trailers[1];
                document.getElementById("video-2").src = `https://www.youtube.com/embed/${secondTrailer.key}`;
            }

            return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=04ed59c56f185b34bbc4edb193bfc58c`);
        })
        .then(response => response.json())
        .then(data => {
            const cast = data.cast;    
            const castList = cast.map(actor => actor.name).join(', ');    
            document.getElementById("p-actors").textContent = `Actors: ${castList}`;    
        })
        .catch(err => console.error('Fetch error:', err));
} else {
    console.error('No movie ID provided');
}
