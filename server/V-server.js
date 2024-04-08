document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("songForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const artist = document.getElementById("artist").value;
        const song = document.getElementById("song").value;

       
        if (artist.trim() !== '' && song.trim() !== '') {
           
            const songData = {
                artist: artist,
                song: song
            };
            let songsArray = JSON.parse(localStorage.getItem("songs")) || [];
            songsArray.push(songData);
            localStorage.setItem("songs", JSON.stringify(songsArray));
            form.reset();
        } else {
            alert("Please have artist and song filled in");
        }
        app.listen(4000, () => {console.log("Server started on port 4000")})

    });
});
