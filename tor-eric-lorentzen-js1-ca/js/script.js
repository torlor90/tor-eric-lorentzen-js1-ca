const url = "https://www.breakingbadapi.com/api/characters?limit=8&offset=0"

fetch(url)
.then(function(response) {
    return response.json()
})

.then(function(characters) {
    showCharacter(characters);
})

.catch(function(error) {
    console.log(error);
})

function showCharacter(characters) {
    console.log(characters);
    const container = document.querySelector(".results");
    
    let html = "";
    
    for (let i = 0; i < characters.length; i++) {

        html += `<div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <img class="image" src="${characters[i].img}" alt="${characters[i].name}" />
            <div class="details">
                <h4 class="name">${characters[i].name}</h4>
                <p><b>Birthday:</b> ${characters[i].birthday}</p>
                <p><b>Occupation:</b> ${characters[i].occupation}</p>
                <a class="btn btn-primary" href="details.html?id=${i + 1}">Details</a>
            </div>
            </div>
            </div>`
    }

    container.innerHTML = html;
}