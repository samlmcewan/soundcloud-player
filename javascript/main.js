"use strict"
// search	



// soundcloud API
SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// find all tracks of query
SC.get('/tracks', {
   q: 'ailsa and the seahorses'
}).then(function(tracks) {
  console.log(tracks);
});



// display cards




// add to playlist and play