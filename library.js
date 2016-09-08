var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
             var playlists = this.playlists;
             for (var key in playlists){
               console.log(`${playlists[key].id}: ${playlists[key].name} - ${playlists[key].tracks.length} tracks`);
             }
            },

  printTracks: function () {
              var tracks = this.tracks;
              for (var key in tracks){
              console.log(tracks[key].id + ": " + tracks[key].name + " by " + tracks[key].artist + " (" + tracks[key].album + ")");
              }
            },
  printPlaylist: function (playlistId) {
              if(this.tracks.hasOwnProperty(playlistId)){
                var trackId = this.tracks[playlistId];
                console.log(trackId.id + ": " + trackId.name + " by " + trackId.artist + " (" + trackId.album + ")");
              }else{
                var playId = this.playlists[playlistId];
                console.log(`${playId.id}: ${playId.name} - ${playId.tracks.length} tracks`);
              }
            },

  addTrackToPlaylist: function (trackId, playlistId) {
              if(this.tracks.hasOwnProperty(trackId)){
                if(this.playlists.hasOwnProperty(playlistId)){
                  if(this.playlists[playlistId].tracks.indexOf(trackId) === -1){
                    this.playlists[playlistId].tracks.push(trackId);
                    return this.playlists[playlistId].tracks;
                  }
                }
              }
            },

  addTrack: function (name, artist, album) {
              function uid() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              }

              var newId = uid();
              this.tracks[newId] = new Object();
              this.tracks[newId].id = newId;
              this.tracks[newId].name = name;
              this.tracks[newId].artist = artist;
              this.tracks[newId].album = album;

              return this.tracks;
            },

 addPlaylist: function (name) {
              function uid() {
               return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              }
              var newId = uid();
              this.playlists[newId] = new Object();

              this.playlists[newId].id = newId;
              this.playlists[newId].name = name;
              this.playlists[newId].tracks = [];

              return this.playlists;
            },

  printSearchResults: function(query) {
              for (var key in this.tracks){
                var newQuery = query.toLowerCase();
                if(this.tracks[key].name.toLowerCase().search(newQuery) !== -1 || this.tracks[key].artist.toLowerCase().search(newQuery) !== -1 || this.tracks[key].album.toLowerCase().search(newQuery) !== -1){
                  console.log(this.tracks[key]);
                }
              }
            }
}

console.log(library.printPlaylists());
