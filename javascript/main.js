"use strict"
// search	

// soundcloud API
let SoundCloudAPI = {};

SoundCloudAPI.init = function() {
	SC.initialize({
  	client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
	});
}

SoundCloudAPI.init(); 

SoundCloudAPI.getTrack = function(inputValue) {
	// find all tracks of query
	SC.get('/tracks', {
	   q: inputValue
	}).then(function(tracks) {
	  console.log(tracks);
	});
}

SoundCloudAPI.getTrack();  


// display cards
SoundCloudAPI.renderTracks = function() {

	let card = document.createElement("div");
		card.classList.add("card");

	let searchResults = document.querySelector(".js-search-results");
		searchResults.appendChild(card);

	let image = document.createElement("div");
	image.classList.add("image");

	card.appendChild(image);

	let image_img = document.createElement("img");
	image_img.classList.add("image_img");

	image.appendChild(image_img)

	let content = document.createElement("div");
	content.classList.add("content");

	card.appendChild(content);

	let header =  document.createElement("div");
	header.classList.add("header");

	content.appendChild(header);

	let header_a = document.createElement("a");
	
	header.appendChild(header_a);

	let addIcon = document.createElement("div");
	addIcon.classList.add("ui");
	addIcon.classList.add("bottom");
	addIcon.classList.add("attached");
	addIcon.classList.add("button");
	addIcon.classList.add("js-button");

	card.appendChild(addIcon);

	let iconTing = document.createElement("i");
	iconTing.classList.add("add");
	iconTing.classList.add("icon");

	addIcon.appendChild(iconTing);

	let spanner = document.createElement("span");
	spanner.innerHTML = "Add to playlist";
	addIcon.appendChild(spanner);
}

SoundCloudAPI.renderTracks();



// add to playlist and play