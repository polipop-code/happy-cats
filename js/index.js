const API_URL =
	"https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_SJRWUOWTVzkAH2ucWp5vyDdj9qiHF6WgnSBTRWH3ecjvHJRSzEF3PnqsChqlL5Jp";

async function reload() {
	const res = await fetch(API_URL);
	const data = await res.json();

	console.log(data);

	const img = document.getElementById("catI");
	img.src = data[0].url;
}

reload();
