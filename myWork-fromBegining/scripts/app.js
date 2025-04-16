document.addEventListener("DOMContentLoaded", async function(){
    try{
        console.time("time it took:");
        const response = await fetch(
        'https://api.itbook.store/1.0/search/javascript/1'
    );
    
        const books = await response.json();
        const cardsContainer = document.querySelector('.cards-container'); // ✅ Select container first
        cardsContainer.innerHTML = "";

        console.log("window",window);
        console.log("books",books);
        books.books.forEach((book)=>{
            const col = document.createElement("div");
            col.className = "col-md-3 mb-3";
            col.innerHTML = "";
            
            // Trim the title to 10 characters (add "..." if it's longer)
            const shortTitle = book.title.length > 12 ? book.title.slice(0, 13) + "..." : book.title;

            col.innerHTML = `
                    <div class="card">
                        <div class="image">
                            <img src="${book.image}" alt="MongoDB Book" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <h5 class="card-title text-uppercase fs-5 fw-bold mb-0">Title:</h5>
                                <p class="m-0 ms-2 fs-4" id="titlebook">${shortTitle}</p>
                                <div class="overlay"></div>
                                <button class="btn button " target="_blank"><a href="${book.url}" class="text-white fw-bold">details</a></button>
                                </div>
                        </div>
                        <div class="card-footer d-flex justify-content-between text-blck bg-light p-3">
                            <h4 class="fw-bold mb-0">${book.price}<span class="ms-1">Euro</span></h4>
                            <h4 class="mb-0"><i class="bi bi-cart"></i></h4>
                        </div>
                    </div>
            `;
            cardsContainer.append(col);
        });
        console.log("books",books);
        }catch(error){
        console.log("Error",error.message);
    }     
});