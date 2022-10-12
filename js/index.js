const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search";

const API_URL_FAVORITES =
	"https://api.thecatapi.com/v1/favourites?api_key=live_SJRWUOWTVzkAH2ucWp5vyDdj9qiHF6WgnSBTRWH3ecjvHJRSzEF3PnqsChqlL5Jp";

async function reload() {
	const res = await fetch(API_URL_RANDOM);
	const data = await res.json();

	// console.log(data);

	if (res.status !== 200) {
		alert("Something is wrong: " + res.status + ", " + data.message);
	} else {
		const img = document.getElementById("catI");
		img.src = data[0].url;
	}
}

reload();

async function favorites() {
	const res = await fetch(API_URL);
	const data = await res.json();

	console.log(data);
}
