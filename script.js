const movies=[""
{title:"Demon Slayer Kimestu No Yaiba Infinity Castle Movie",year:2025}
{title:"Naruto Shippuden the Movie: Blood Prison",year:2011}
{title:"My Hero Academia: Heroes Rising",year:2019 }
];

function renderList() {
const listContainer = document.getElementById("movies");
listContainer.innerHTML = "";
movies.forEach(movie => {
const li = document.createElement("li");
li.textContent = `${movie.title} (${movie.year})`;
listContainer.appendChild(li);
});
}

renderList();

document.querySelector("form").addEventListener("submit", event => {
event.preventDefault();
const data = new FormData(event.target);
const title = data.get("title");
const year = data.get("year");

if (!title || !year) return;

const newMovie = { title, year };
movies.push(newMovie);

console.log("Added:", newMovie);
console.log("All Movies:", movies);

renderList();
event.target.reset();
});



