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

// renderPlaylist()
// renderSongs()
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
	+ "<th><button type=\"button\" onclick=\"moveUpSong('" + id + "')\">Move Up</button><th>"
	+ "</tr>"
	)
}


// on click event then create ID in css
//favorites function


function moveUpSong(id) {
	id = id.trim();
	const element = document.getElementById(id);
	let upList = songList.indexOf(id);

	for (items in songList) {

	}



}

function removeSong(id) {
	id = id.trim();
	const element = document.getElementById(id);
	element.remove();

	console.log("Before\n");
	console.log(songList);

	for (let i =0; i < songList.length; i++) {
		entry = songList[i];

		if (entry.id == id) {
			songList.splice(i,1);

			break;
		}
	}

	console.log("After\n")
	console.log(songList)
}
	// while (table.rows.length > 1) {
	// 	table.deleteRow(1);
	// }

	// for (let i = 0; i < songList.length; i++) {
	// 	let row = table.insertRow(i + 1);
	// 	let nameCell = row.insertCell(0);
	// 	let artistCell = row.insertCell(1);
	// 	let genreCell = row.insertCell(2);
	// 	let editCell = row.insertCell(3);
	// 	let deleteCell = row.insertCell(4);

	// 	nameCell.innerHTML = songList[i].name;
	// 	artistCell.innerHTML = songList[i].artist;
	// 	genreCell.innerHTML = songList[i].genre;

	// 	let editButton = document.createElement("button");
	// 	editButton.innerHTML = "Edit";
	// 	editButton.onclick = function() {editSong(i)};
	// 	editCell.appendChild(editButton);

	// 	let deleteButton = document.createElement("button");
	// 	deleteButton.innerHTML = "Delete";
	// 	delete
