const fetchMusices = async function(searchSong, searchSinger, searchAlbum) {
    const response = await fetch("https://free-music-api2.vercel.app/getSongs");
    const musices = await response.json();

    // If there are search terms, filter the musices based on those terms
    return musices.filter(music => {
        const matchesSong = searchSong ? music.songName.toLowerCase().includes(searchSong.toLowerCase()) : true;
        const matchesSinger = searchSinger ? music.singer.toLowerCase().includes(searchSinger.toLowerCase()) : true;
        const matchesAlbum = searchAlbum ? music.albumname.toLowerCase().includes(searchAlbum.toLowerCase()) : true;

        return matchesSong && matchesSinger && matchesAlbum;
    });
};

document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Initial fetch and render
        let musices = await fetchMusices('', '', '');  // Fetch all musics initially
        console.log("musices-1", musices);
        const musiceContainer = document.querySelector(".musices-container");

        const renderMusics = (musices) => {
            musiceContainer.innerHTML = ''; // Clear existing music items
            musices.forEach(music => {
                const col = document.createElement("div");       
                col.className = "col-md-12 mb-4";

                col.innerHTML = `
                    <div class="card border-warning mx-auto" style="max-width: 75rem;">
                        <div class="card-body d-flex align-items-center justify-content-start">
                            <div class="flex-shrink-0">
                                <a href="${music.url}" target="_blank" class="link-url">
                                    <img src="${music.songBanner}" alt="" class="musice-poster" />
                                </a>
                            </div>
                            <div class="d-flex flex-grow-1 ms-2 align-items-center justify-content-start">
                                <h6 class="ms-4 fw-bold text-uppercase">Song Name:</h6><h6 class="ms-2 fs-6 text-secondary">${music.songName}</h6>
                                <h6 class="ms-4 fw-bold text-uppercase">Singer:</h6><h6 class="ms-2 fs-6 text-secondary">${music.singer}</h6>
                                <h6 class="ms-4 fw-bold text-uppercase">Album Name:</h6><h6 class="ms-2 fs-6 text-secondary">${music.albumname}</h6>
                            </div>
                        </div>
                    </div>
                `;
                musiceContainer.append(col);
            });
        };

        renderMusics(musices); // Initially render all musics

        // Search button event listener
        const searchBtn = document.querySelector(".search-btn");
        searchBtn.addEventListener("click", async function() {
            // Get values from the search fields
            const searchSong = document.querySelector(".search-songname").value;
            const searchSinger = document.querySelector(".search-singer").value;
            const searchAlbum = document.querySelector(".search-album").value;

            console.log("searchSong", searchSong);
            console.log("searchSinger", searchSinger);
            console.log("searchAlbum", searchAlbum);

            // Fetch and filter musics based on the search criteria (all fields)
            musices = await fetchMusices(searchSong, searchSinger, searchAlbum);
            console.log("Filtered Musics", musices);
            renderMusics(musices); // Re-render filtered musics
        });

    } catch (error) {
        console.log("error", error.message);
    }
});
