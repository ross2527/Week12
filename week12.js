// functionality 
// bootstrap and css

//1)table - push data into table

//2)on click of table button - pull info into 

function renderSongs() {
	while (songsContainer.firstChild) {
		songsContainer.removeChild(songsContainer.firstChild)
	}

	for (const song of songs) {
		const div = document.createElement("div")
		div.textContent = song.name

		const addButton = document.createElement("button")
		addButton.textContent = "+"
		addButton.classList.add("btn")
		addButton.classList.add("btn-success")
		addButton.addEventListener("click", () => addToPlaylist(song.id))
		div.appendChild(addButton)

		songsContainer.appendChild(div)
	}
}

// delete items on list
// update in some way shape or form

//update name of something on the list

// start with diplaying then adding then deleting then updating 
// array of stuff to show up on page - dynamically
// showing what is in array 

//1) start with array

// const items = []

let songList = [];

function addSong() {

	let songName = document.getElementById("songName").value;
	let artistName = document.getElementById("artistName").value;
	let genre = document.getElementById("genre").value;

	if (songName === "" || artistName === "" || genre === "") {
		alert("Please fill out all fields.");
	} else {

		let idnum = songList.length;
		let song = {
			name: songName,
			artist: artistName,
			genre: genre,
			id: "entry" + idnum

		};

		songList.push(song);
		displaySongList();
		// clearForm();

	}
	document.getElementById("songName").value = "";
	document.getElementById("artistName").value = "";
	document.getElementById("genre").value = "";


}

function displaySongList() {
	let table = document.getElementById("songTable");

	console.log(table);

	let i = (songList.length) - 1;

	let id = "entry" + i;

	$("table").find("tbody").append("<tr id=\"" + id + "\">" +
		"<th>" + songList[i].name + "</th>"
		+ "<th>" + songList[i].artist + "</th>"
		+ "<th>" + songList[i].genre + "</th>"
		+ "<th><button type=\"button\" onclick=\"removeSong('" + id + "')\">Remove Song</button></th>"
		+ "<th><button type=\"button\" onclick=\"heartButton('" + id + "')\">Favorite Song</button><th>"
		+ "</tr>"
	)
}


// on click event then create ID in css
//favorites function

// instead of remove, using append. 

//getelement by ID id is favorite

let message = ""

//populate this array with favorites and then delete them once unfavorited
favs = [];
function heartButton(id) {
	id = id.trim();
	let songName = document.getElementById("songName").value;

	const element = document.getElementById(id);
	//let main = $("<main/>");



	//heartButton.text("<3"); {



	if (message != "<3") {
		message = "<3";
		favs.push(songName)
		console.log(favs);
		//heartButton.addClass("btn btn-danger")\
		element.classList.add("favorite");
	} else {
		message = "";
		element.classList.remove("favorite");
		favs.pop(songName);
		//heartButton.addClass("btn btn-outline-danger")
		console.log(favs);
	}
	// container.append(main) 

}
//}


function removeSong(id) {
	id = id.trim();
	const element = document.getElementById(id);
	element.remove();

	console.log("Before\n");
	console.log(songList);

	for (let i = 0; i < songList.length; i++) {
		entry = songList[i];

		if (entry.id == id) {
			songList.splice(i, 1);

			break;
		}
	}

	console.log("After\n")
	console.log(songList)
}


	// 	let deleteButton = document.createElement("button");
	// 	deleteButton.innerHTML = "Delete";
	// 	delete
