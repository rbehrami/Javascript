document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-button");
    const searchInput = document.querySelector(".searchtitle");
    const cardsContainer = document.querySelector(".cards-container");

    searchBtn.addEventListener("click", async function () {
        const query = searchInput.value.trim();
        if (!query) return alert("Please enter a search term.");

        try {
            console.time("time it took:");
            const response = await fetch(`https://api.itbook.store/1.0/search/${query}`);
            const data = await response.json();
            const books = data.books || [];

            // Clear existing cards
            cardsContainer.innerHTML = "";

            if (books.length === 0) {
                cardsContainer.innerHTML = "<p>No books found matching your criteria.</p>";
                return;
            }

            books.forEach((book) => {
                const shortTitle = book.title.length > 12 ? book.title.slice(0, 13) + "..." : book.title;

                const col = document.createElement("div");
                col.className = "col-md-3 mb-3";
                col.innerHTML = `
                    <div class="card">
                        <div class="image">
                            <img src="${book.image}" alt="${book.title}" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <h5 class="card-title text-uppercase fs-5 fw-bold mb-0">Title:</h5>
                                <p class="m-0 ms-2 fs-4" id="titlebook">${shortTitle}</p>
                                <div class="overlay"></div>
                                <button class="btn button">
                                    <a href="${book.url}" class="text-white fw-bold" target="_blank">Details</a>
                                </button>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between text-black bg-light p-3">
                            <h4 class="fw-bold mb-0">${book.price}<span class="ms-1">Euro</span></h4>
                            <h4 class="mb-0"><i class="bi bi-cart"></i></h4>
                        </div>
                    </div>
                `;
                cardsContainer.appendChild(col);
            });

            console.timeEnd("time it took:");
        } catch (error) {
            console.error("Error:", error.message);
            cardsContainer.innerHTML = "<p>Something went wrong. Try again.</p>";
        }
    });
});
