const API_URL =
	"https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_SJRWUOWTVzkAH2ucWp5vyDdj9qiHF6WgnSBTRWH3ecjvHJRSzEF3PnqsChqlL5Jp";

async function reload() {
	const res = await fetch(API_URL);
	const data = await res.json();

	console.log(data);

	const img1 = document.getElementById("cat1");
	img1.src = data[0].url;
	const img2 = document.getElementById("cat2");
	img2.src = data[1].url;
	const img3 = document.getElementById("cat3");
	img3.src = data[2].url;
}

reload();
