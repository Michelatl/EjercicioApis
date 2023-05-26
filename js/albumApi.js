const api = "https://jsonplaceholder.typicode.com/photos";

const getData = (apiurl) => {
  fetch(apiurl)
    .then((response) => response.json())
    .then((json) => {
      fillDate(json);
    })
    .catch((error) => {
      console.log("Error desde la api", error),
        alert("La api no esta disponible");
    });
};

const fillDate = (jsonData) => {
  let htmlCards = "";

  for (let i = 0; i < 20; i++) {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += `<img src="${jsonData[i].url}" class="card-img-top" alt="...">`
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${jsonData[i].title}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  }
  document.getElementById("cardsFromApi").innerHTML = htmlCards;

};
getData(api);


