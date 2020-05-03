const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const characterUrl = "https://www.breakingbadapi.com/api/characters/";

const fullUrl = characterUrl + `${id}`;

const container = document.querySelector(".detail-container");

fetch(fullUrl)
.then(function(response) {
    return response.json()
})

.then(function(character) {
    showCharacter(character);
})

.catch(function(error) {
    console.log(error);
})

function showCharacter(character) {
    console.log(character);
    const container = document.querySelector(".detail-container");

    let html = "";

    for (let i = 0; i < character.length; i++) {

    html += `<div class="detail-container">
        <img class="details-image" src="${character[i].img}" alt="${character[i].name}" />
        <div class="detail-details">
        <h1>${character[i].name} </h1>
        <p>Nickname: <span class="value" id="characterNickname">${character[i].nickname}</span></p>
        <p>Portrayed: <span class="value" id="characterPortrayed">${character[i].portrayed}</span></p>
        </div>
    </div>`
    }

container.innerHTML = html;
}