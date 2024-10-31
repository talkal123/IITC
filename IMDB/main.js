
const moviesListElement = document.querySelector("#movie-item");
const middleDiv = document.querySelector("#container");
const h1Content = document.querySelector("#h1");
const pContent = document.querySelector("#p");
const hamburger = document.querySelector("#hamburger-btn");
const leftNav = document.querySelector("#left-nav");
const ringLogo = document.querySelector("#Ring-logo");
const notification = document.querySelector("#favorits");
const popularItem = document.querySelector("#popular-item");
const upcomingItem = document.querySelector("#Upcoming-items");
const topRatedItems = document.querySelector("#Top-Rated-items");
const btnAction = document.querySelector("#btn-Action");
const countNum = document.querySelector("#count");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#Search-logo");
const searchResult = document.querySelector("#search-result");


const fMovies = [];
let count = 0;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGVkNTljNTZmMTg1YjM0YmJjNGVkYjE5M2JmYzU4YyIsIm5iZiI6MTcyODk5MTI3Ny41NDY5MzMsInN1YiI6IjY3MGU0ZjAyMGI4MDA1MzdkNzVjZTM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C7_OFnH9U-0JyBgbJUiaAlX0JpcCRhvNzMPe9MAJX-0'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        const topFiveMovies = response.results.slice(0, 6);
        topFiveMovies.forEach(movie => {
            renderMovie(movie);
        });
        console.log(response);
    })
    .catch(err => console.error(err));

hamburger.addEventListener("click", () => {
    if (leftNav.style.display === "grid") {
        leftNav.style.display = "none";
    } else {
        leftNav.style.display = "grid"; 
    }
});


const renderMovie = function(movie) {
    const divElement = document.createElement("div");
    divElement.innerHTML = `
        <h1>${movie.title}</h1>
        <p>${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="${movie.title}">
        <button class="add-movie-btn">+</button>
        <button id="btn-Details" onclick="window.location.href='Movies/movies-details.html?id=${movie.id}'" style="color: white;">
            Details
        </button>
        
    `;
    
    divElement.addEventListener('click', () => {
        console.log('Movie clicked:', movie);
        h1Content.textContent = movie.title;
        pContent.textContent = movie.overview; 
        middleDiv.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`;
        middleDiv.style.backgroundSize = 'cover';
    });

    const addButton = divElement.querySelector(".add-movie-btn");
        addButton.addEventListener("click",()=> { 

            if(fMovies.includes(movie.title)){
                fMovies.splice(fMovies.indexOf(movie.title), 1);
                count--; 
                console.log(count);
            }else{
                fMovies.push(movie.title);
                count ++;
                console.log(count);
            }
            console.log(fMovies);
            countNum.innerHTML = count;


            if(addButton.textContent === "+"){
                addButton.textContent = "-"
                addButton.style.backgroundColor = "yellow"

            }else{
                addButton.textContent = "+"
                addButton.style.backgroundColor = "rgb(236, 231, 231, 0.7)"

            }
            updateFavorites();    
        });

    moviesListElement.appendChild(divElement);

};

function updateFavorites() {
    notification.innerHTML = '';     
    fMovies.forEach(movie => {
        const li = document.createElement("li");
        li.textContent = movie;     
        notification.appendChild(li);
    });
}

ringLogo.addEventListener("click",() =>{
    if(notification.style.display === "block"){
        notification.style.display = "none"
    } else {
        notification.style.display = "block"
    }
});


const popularMovie = function(movie) {
    const divElement = document.createElement("div");
    divElement.innerHTML = `
        <h1>${movie.name}</h1>
        <p>${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="${movie.title}">
        <button class="add-movie-btn">+</button>
        <button id="btn-Details" onclick="window.location.href='Movies/movies-details.html?id=${movie.id}'" style="color: white;">
            Details
        </button>
    `;

    divElement.addEventListener('click', () => {
        console.log('Movie clicked:', movie);
        h1Content.textContent = movie.name;
        pContent.textContent = movie.overview; 
        middleDiv.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`;
        middleDiv.style.backgroundSize = 'cover';
    });

    const addButton = divElement.querySelector(".add-movie-btn");
        addButton.addEventListener("click",()=> { 
            
            if(fMovies.includes(movie.name)){
                fMovies.splice(fMovies.indexOf(movie.name), 1);
                count--; 
                console.log(count);
            }else{
                fMovies.push(movie.name);
                count ++;
                console.log(count);
            }
            console.log(fMovies);
            countNum.innerHTML = count;

            if(addButton.textContent === "+"){
                addButton.textContent = "-"
                addButton.style.backgroundColor = "yellow"

            }else{
                addButton.textContent = "+"
                addButton.style.backgroundColor = "rgb(236, 231, 231, 0.7)"

            }
            updateFavorites();    
        });

    popularItem.appendChild(divElement);

};


const popularOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGVkNTljNTZmMTg1YjM0YmJjNGVkYjE5M2JmYzU4YyIsIm5iZiI6MTcyODk5NTM1MC41MDQ5MzcsInN1YiI6IjY3MGU0ZjAyMGI4MDA1MzdkNzVjZTM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLSR6Nl0KURjrPsq8pl39kAbwoBKFx-vo_46IzxwHzE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', popularOptions)
    .then(res => res.json())
    .then(res => {
        const topPopularMovies = res.results.slice(0, 20);
        topPopularMovies.forEach(movie => {
            popularMovie(movie);
        });
    })
    .catch(err => console.error(err));


    const UpcomingOptions = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGVkNTljNTZmMTg1YjM0YmJjNGVkYjE5M2JmYzU4YyIsIm5iZiI6MTcyODk5NTM1MC41MDQ5MzcsInN1YiI6IjY3MGU0ZjAyMGI4MDA1MzdkNzVjZTM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLSR6Nl0KURjrPsq8pl39kAbwoBKFx-vo_46IzxwHzE'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => {
          const topUpcomingMovies = res.results.slice(0, 20);
          topUpcomingMovies.forEach(movie => {
              UpcomingMovie(movie);
          });
      })
      .catch(err => console.error(err));



    const UpcomingMovie = function(movie) {
        const divElement = document.createElement("div");
        divElement.innerHTML = `
            <h1>${movie.name}</h1>
            <p>${movie.overview}</p>
            <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="${movie.title}">
            <button class="add-movie-btn">+</button>
            <button id="btn-Details" onclick="window.location.href='Movies/movies-details.html?id=${movie.id}'" style="color: white;">
                Details
            </button>
        `;
    
        divElement.addEventListener('click', () => {
            console.log('Movie clicked:', movie);
            h1Content.textContent = movie.title;
            pContent.textContent = movie.overview; 
            middleDiv.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`;
            middleDiv.style.backgroundSize = 'cover';
        });
    
        const addButton = divElement.querySelector(".add-movie-btn");
            addButton.addEventListener("click",()=> { 
    
                if(fMovies.includes(movie.title)){
                    fMovies.splice(fMovies.indexOf(movie.title), 1);
                    count--; 
                    console.log(count);
                }else{
                    fMovies.push(movie.title);
                    count ++;
                    console.log(count);
                }
                console.log(fMovies);
                countNum.innerHTML = count;
    
                if(addButton.textContent === "+"){
                    addButton.textContent = "-"
                    addButton.style.backgroundColor = "yellow"
                }else{
                    addButton.textContent = "+"
                    addButton.style.backgroundColor = "rgb(236, 231, 231, 0.7)"
                }
                updateFavorites();    
            });
    
        upcomingItem.appendChild(divElement);
    
    };



const topRatedOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGVkNTljNTZmMTg1YjM0YmJjNGVkYjE5M2JmYzU4YyIsIm5iZiI6MTcyODk5NTM1MC41MDQ5MzcsInN1YiI6IjY3MGU0ZjAyMGI4MDA1MzdkNzVjZTM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLSR6Nl0KURjrPsq8pl39kAbwoBKFx-vo_46IzxwHzE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
      const topRatedMovies = res.results.slice(0, 20);
      topRatedMovies.forEach(movie => {
        RatedMovie(movie);
      });
  })
  .catch(err => console.error(err));



  const RatedMovie = function(movie) {
    const divElement = document.createElement("div");
    divElement.innerHTML = `
        <h1>${movie.name}</h1>
        <p>${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" alt="${movie.title}">
        <button class="add-movie-btn">+</button>
        <button id="btn-Details" onclick="window.location.href='Movies/movies-details.html?id=${movie.id}'" style="color: white;">
            Details
        </button>
    `;

    divElement.addEventListener('click', () => {
        console.log('Movie clicked:', movie);
        h1Content.textContent = movie.title;
        pContent.textContent = movie.overview; 
        middleDiv.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`;
        middleDiv.style.backgroundSize = 'cover';
    });

    const addButton = divElement.querySelector(".add-movie-btn");
        addButton.addEventListener("click",()=> { 

            if(fMovies.includes(movie.title)){
                fMovies.splice(fMovies.indexOf(movie.title), 1);
                count--; 
                console.log(count);
            }else{
                fMovies.push(movie.title);
                count ++;
                console.log(count);
            }
            console.log(fMovies);
            countNum.innerHTML = count;

            if(addButton.textContent === "+"){
                addButton.textContent = "-"
                addButton.style.backgroundColor = "yellow"
            }else{
                addButton.textContent = "+"
                addButton.style.backgroundColor = "rgb(236, 231, 231, 0.7)"
            }
            updateFavorites(); 
        });

    topRatedItems.appendChild(divElement);

};

function SearchFunc() {
    const query = searchInput.value; 
    const apiKey = '04ed59c56f185b34bbc4edb193bfc58c'; 
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const movie = data.results[0];     
                output.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}" alt="${movie.title}">
                    <strong>${movie.title}</strong>     
                `;
            } else {
                output.innerHTML = "No result";
            }
            if (searchResult.style.display === "block") {
                searchResult.style.display = "none";
            } else {
                searchResult.style.display = "block"; 
            }
        })
        
}

searchBtn.addEventListener("click", SearchFunc);



const popularMovies = document.querySelector("#The-popular-Movies");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const upcomingMovies = document.querySelector("#Upcoming-Movies");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const RatedMovies = document.querySelector("#Top-Rated-Movies");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");




button1.addEventListener("click", () =>{
    popularMovies.scrollBy({
        top: 0,
        left: -100, 
        behavior: 'smooth' 
    });
});

button2.addEventListener("click", () => {
    popularMovies.scrollBy({
        top: 0,
        left: 200, 
        behavior: 'smooth' 
    });
});


button3.addEventListener("click", () =>{
    upcomingMovies.scrollBy({
        top: 0,
        left: -200, 
        behavior: 'smooth' 
    });
});

button4.addEventListener("click", () => {
    upcomingMovies.scrollBy({
        top: 0,
        left: 200, 
        behavior: 'smooth' 
    });
});


button5.addEventListener("click", () =>{
    RatedMovies.scrollBy({
        top: 0,
        left: -200, 
        behavior: 'smooth' 
    });
});

button6.addEventListener("click", () => {
    
    RatedMovies.scrollBy({
        top: 0,
        left: 200, 
        behavior: 'smooth' 
    });
});





