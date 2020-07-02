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
	   q: "ailsa and the seahorses"
	}).then(function(tracks) {
	  console.log(tracks);
	  SoundCloudAPI.renderTracks(tracks);
	});
}

SoundCloudAPI.getTrack();  


// display cards
SoundCloudAPI.renderTracks = function(tracks) {

	tracks.forEach(function(track) { 

	// card
	let card = document.createElement("div");
		card.classList.add("card");

	

	// image
	let image = document.createElement("div");
	image.classList.add("image");

	

	let image_img = document.createElement("img");
	image_img.classList.add("image_img");
	image_img.src = track.artwork_url || "https://ae01.alicdn.com/kf/Hf48864be2b3d438595d712f744c88f678/Aquarium-Luminous-Seahorse-ornament-Glow-in-Dark-Landscaping-silicone-sea-horse-Glowing-fish-tank-decoration-hippocampus.jpg_640x640.jpg";

	image.appendChild(image_img)

	// Content
	let content = document.createElement("div");
	content.classList.add("content");

	

	let header =  document.createElement("div");
	header.classList.add("header");
	header.innerHTML = "<a href='" + track.permalink_url + "' target='_blank'>" + track.title + "</a>";


	content.appendChild(header);


	// Button
	let button = document.createElement("div");
	button.classList.add("ui");
	button.classList.add("bottom");
	button.classList.add("attached");
	button.classList.add("button");
	button.classList.add("js-button");

	

	let iconTing = document.createElement("i");
	iconTing.classList.add("add");
	iconTing.classList.add("icon");

	button.appendChild(iconTing);

	let spanner = document.createElement("span");
	spanner.innerHTML = "Add to playlist";
	button.appendChild(spanner);

	button.addEventListener('click', function(){
	SoundCloudAPI.getEmbed(track.permalink_url);
		

	});

	// append child

	card.appendChild(image);
	card.appendChild(content);
	card.appendChild(button);

	let searchResults = document.querySelector(".js-search-results");
		searchResults.appendChild(card);



});

	
}

	SoundCloudAPI.getEmbed = function(trackURL) {
		console.log("clicked and we're in getEmbed");
		SC.oEmbed(trackURL, {
		  auto_play: true
		}).then(function(embed){
		  console.log('oEmbed response: ', embed);

		  let sideBar = document.querySelector(".js-playlist");
		  
		  let box = document.createElement("div");
		  box.innerHTML = embed.html;

		  sideBar.insertBefore(box, sideBar.firstChild);
		  localStorage.setItem("key", sideBar.innerHTML);


	});

}

let sideBar = document.querySelector(".js-playlist");
sideBar.innerHTML = localStorage.getItem("key");





// add to playlist and play