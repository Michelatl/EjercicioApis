const Api = "https://rickandmortyapi.com/api/character";

const getData = (apiData) => {
  fetch(apiData)
    .then((response) => response.json())
    .then((json) => {
        fillData(json);
    })
    .catch((error) => {
      console.log("Error en la api", error),
      alert("Error desde la api");
    });
};

const fillData = (jsonData) => {
  let htmlCards = "";
  for (let i = 0; i < 20; i++) {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += `<img src="${jsonData.results[i].image}" class="card-img-top" alt="...">`;
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${jsonData.results[i].name}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  }
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};
getData(Api);
