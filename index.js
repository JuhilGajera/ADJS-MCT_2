const apiUrl =
  "https://api.themoviedb.org/3/trending/movie/day?&api_key=ae487eced8f1949a2021811bfd1043b4";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(apiUrl);
function showMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const el = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("h2");
        const text2 = document.createElement("h4");
        console.log(element);

        text2.innerHTML = element.release_date;
        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        el.appendChild(text2);
        main.appendChild(el);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchTerm = search.value;

  if (searchTerm) {
    showMovies(SEARCHAPI + searchTerm);
    search.value = "";
  }
});
// let toggler = document.getElementById("searchInput");
// toggler.onclick = function () {
//   let paragraph = document.getElementById("search");
//   search.classList.toggle("search");
// };
// function searchInput() {
//   document.getElementById("searchInput").innerHTML = `<form id="form">
//   <input type="text" id="search" placeholder="Search" class="search" />
// </form>`;
// }
