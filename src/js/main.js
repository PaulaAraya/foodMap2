window.onload = () => {
  principalPageSplash();
}

function principalPageSplash() {
  setTimeout(function(){ 
    principalPage.style.display = 'none';
    mapPage.style.display = 'block'; 
  }, 3000);
};

const showResult = (info) => {
  let printRestaurant = document.getElementById('printRestaurant');
  printRestaurant.innerHTML += `<p>
  Local: ${JSON.stringify(info.name)}
  Direccion: ${JSON.stringify(info.address)}</p>`;
}

const cleanResult = () =>{
    printRestaurant.innerHTML = '';
}