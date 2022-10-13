const API_URL_RANDOM =
	"https://api.thecatapi.com/v1/images/search??api_key=live_SJRWUOWTVzkAH2ucWp5vyDdj9qiHF6WgnSBTRWH3ecjvHJRSzEF3PnqsChqlL5Jp";

const API_URL_FAVORITES =
	"https://api.thecatapi.com/v1/favourites?api_key=live_SJRWUOWTVzkAH2ucWp5vyDdj9qiHF6WgnSBTRWH3ecjvHJRSzEF3PnqsChqlL5Jp";

const API_URL_FAVORITES_DELETE = (id) =>
	`https://api.thecatapi.com/v1/favourites/${id}?api_key=live_SJRWUOWTVzkAH2ucWp5vyDdj9qiHF6WgnSBTRWH3ecjvHJRSzEF3PnqsChqlL5Jp`;

// -------------------------------------------------- Load a new cat
async function newCat() {
	const res = await fetch(API_URL_RANDOM);
	const data = await res.json();

	// console.log(data);

	if (res.status !== 200) {
		alert("Something is wrong: " + res.status + ", " + data.message);
	} else {
		const img = document.getElementById("catI");
		img.src = data[0].url;

		const btnAdd = document.getElementById("saveCat");
		btnAdd.onclick = () => newFavoriteCat(data[0].id);
	}
}

// -------------------------------------------------- Save a new cat
async function newFavoriteCat(id) {
	const res = await fetch(API_URL_FAVORITES, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			image_id: id,
		}),
	});

	const data = await res.json();

	// console.log(res);

	if (res.status !== 200) {
		alert("Something is wrong: " + res.status + ", " + data.message);
	} else {
		loadFavoriteCats();
	}
}

// -------------------------------------------------- Load favorite cats
async function loadFavoriteCats() {
	const res = await fetch(API_URL_FAVORITES);
	const data = await res.json();

	// console.log("Favoritos");
	// console.log(data);

	if (res.status !== 200) {
		alert("Something is wrong: " + res.status + ", " + data.message);
	} else {
		const section = document.getElementById("favorites");
		section.innerHTML = "";

		data.forEach((michi) => {
			const article = document.createElement("article");
			const img = document.createElement("img");
			const button = document.createElement("button");
			const btnText = document.createTextNode("Remove from favorites");

			button.appendChild(btnText);
			button.classList.add("deleteCat");
			button.onclick = () => deleteFavorite(michi.id);
			img.src = michi.image.url;

			article.appendChild(img);
			article.appendChild(button);

			section.appendChild(article);
		});
	}
}

// -------------------------------------------------- Delete a favorite cat

async function deleteFavorite(id) {
	const res = await fetch(API_URL_FAVORITES_DELETE(id), {
		method: "DELETE",
	});

	const data = res.json();

	if (res.status !== 200) {
		alert("Something is wrong: " + res.status + ", " + data.message);
	} else {
		loadFavoriteCats();
	}
}

newCat();
loadFavoriteCats();
