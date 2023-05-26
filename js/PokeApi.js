const ApiPoke = "https://pokeapi.co/api/v2/pokemon/";

const getData = (ApiPokeData) => {
  for (let i = 1; i < 20; i++) {
    fetch(ApiPokeData + i)
      .then((response) => response.json())
      .then((json) => {
        fillData(json);
      })
      .catch((error) => {
        console.log("Error en la API", error);
        alert("Error desde la API");
      });
  }
};

const fillData = (jsonData) => {
  let htmlCards = "";
  htmlCards += "";
  htmlCards += '<div class="col">';
  htmlCards += '<div class="cards">';
  htmlCards += `<img src="${jsonData.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">`;
  htmlCards += '<div class="body">';
  htmlCards += `<h5 class="card-title">${jsonData.species.name}</h5>`;
  htmlCards += `<h5 class="card-title">${jsonData.id}</h5>`;
  htmlCards += "</div>";
  htmlCards += "</div>";
  htmlCards += "</div>";

  document.getElementById("cardsFromApi").innerHTML += htmlCards;
};

getData(ApiPoke);