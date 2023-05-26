// function getData2 () {} // funcion normal es igual de valida que la flecha
//URL de la api de usuarios
const api = "https://jsonplaceholder.typicode.com/users";
const btnApiUsers = document.getElementById("apiUsers");

// Obtener la información de la API
//cuando se crea una funcion recibe parametros que alguien envia Ufuncion que se utiliza)
const getData = (apiurl) => {
  fetch(apiurl)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error desde la api", error),
        alert("La api no esta disponible");
    });
};

const fillData = (jsonData) => {
  //crar los 0 card con los datos de los 10 usuarios qu enten dentro del jason
  let htmlCards = "";
  //ciclo repetitivo for
  console.log(jsonData);
  jsonData.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.name}</h5>`;
    htmlCards += `<h5 class="card-text">${e.email}</h5>`;
    htmlCards += `<h5 class="card-title">${e.address.city}</h5>`;
    htmlCards += `<h5 class="card-text">${e.phone}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards
};

// Evento click
//utilizar funcion se envia informacion
btnApiUsers.onclick = function () {
  getData(api);
};
//innerHTML(sobre escribir algo)
//interpolacion: colocar un valor de variable dentro de un string(``)
//variabeles-funcion-evento
//Alertas y log
// condocional(if/else)
//tipo de datos string int boolean
//comparaciones = <..
//operador logico && ||
//DOM (data object model)document= ir al htlm
//funciones
//eventos ej: onclick
//return
//promesas .then .cash
//.then = si pasa .cash= No pasa
//asincronismo
//Separar lineas de codigo , solo en then y cash
//array coleccion o lista de datos(matriz)
//flex creacion de columna y fila
