const Api = "https://rickandmortyapi.com/api/character";

const getData = (ApiPhoto) => {
  fetch(ApiPhoto)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error desde la api", error), alert("Error en la api");
    });
};
const fillData = (jsonData) => {
  let htmlCards = "";
  jsonData.results.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += `<img src="${e.image}" class="card-img-top" alt="...">`;
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.name}</h5>`;
    htmlCards += `<h5 class="card-text">${e.species}</h5>`;
    htmlCards += `<h5 class="card-text">${e.gender}</h5>`
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });

  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

getData(Api);
