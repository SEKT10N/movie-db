function getMovies() {
	let movie = document.querySelector('#search').value;
	const promise = fetch('https://www.omdbapi.com/?apikey=55dac5c9&t=' + movie);
	promise
	.then((res) => res.json())
	.then((data) => {
		if (data.Response === 'True') {
			let output = `
				<a href="https://www.imdb.com/title/${data.imdbID}" target="_blank"><img src="${data.Poster}"></a>
				<div>
					<h2>${data.Title}</h2>
					<sup>Released: ${data.Released}</sup>
				</div>
				<p>Genre: ${data.Genre} | <span id="type">Type: ${data.Type}</span> | Language: ${data.Language} | Runtime: ${data.Runtime} | Rating: ${data.imdbRating}</p>
				<p><h6>${data.Plot}</h6></p>
			`;
			document.querySelector('#info').innerHTML = output;
		} else {
			document.querySelector('#info').innerHTML = 'No results found!';
		}
	});
}

document.querySelector("#search").addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.querySelector("#btn").click();
	}
})