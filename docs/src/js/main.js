window.onload = () => {
  principalPageSplash();
}

function principalPageSplash() {
  setTimeout(function () {
    principalPage.style.display = 'none';
    mapPage.style.display = 'block';
  }, 3000);
};

//Función que imprime listas
const showResult = (info) => {
  let printRestaurant = document.getElementById('printRestaurant');
  printRestaurant.innerHTML += ` 
  <ul class="list-group list-group-flush" style="width: 100%;">
             <li class="list-group-item">
             <h6 class="card-title">${JSON.stringify(info.name)}</h6>
             <p class="card-text text-justify>Direccion: ${JSON.stringify(info.address)}</p>
             </li>
           </ul>
` ;
}

//limpia lista de restaurantes
const cleanResult = () => {
  printRestaurant.innerHTML = '';
}
/*
function btnInfo(inforesult){
  document.getElementById('popUp').setAttribute(
    "style", "visibility:visible; opacity: 1; background-color: white; position: fixed; top:0; left:0; right:0; bottom:0; margin:0; z-index: 999; transition:all 1s;");
  
  document.getElementById('title').innerHTML = JSON.stringify(inforesult.name);
  document.getElementById('infoRestraurant').innerHTML += `
<p>Horario: ${JSON.stringify(inforesult.openingHours)}</p>
<p>Direccion: ${JSON.stringify(inforesult.address)}</p>
`
};

function closeModal() {
  document.getElementById('popUp').setAttribute(
    "style", "visibility: hidden; margin-top: -300px;");
}

*/