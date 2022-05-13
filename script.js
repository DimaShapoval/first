const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const lables = document.querySelectorAll('lable');
const options = document.querySelectorAll('option');


selectEl.addEventListener('change', function(){
  //   if(this.value === 'mercury'){
  //     registrationImage.src="./styles/Planet.svg";
  //   }
  //   else if(this.value === 'venus'){
  //     registrationImage.src='./styles/Venus.png';
  //   }
  //   else if(this.value === 'earth'){
  //     registrationImage.src='./styles/Earth.png';
  //   }
  //   else if(this.value === 'mars'){
  //     registrationImage.src='./styles/Mars.png';
  //   }
  //   else if(this.value === 'neptune'){
  //     registrationImage.src='./styles/Neptune.png';
  //   }
  // else{
  //   registrationImage.src='./styles/Uran.svg';
  //}
  switch(true){
      case this.value === 'mercury': registrationImage.src="./styles/Planet.svg", document.body.style.backgroundImage = "url(./styles/bg.jpg)",lableToChange(this);
      break;
      case this.value === 'venus': registrationImage.src='./styles/Venus.png', document.body.style.backgroundImage = "url(./styles/bg.jpg)",lableToChange(this);
      break; 
      case this.value === 'earth': registrationImage.src='./styles/Earth.png', document.body.style.backgroundImage = "url(./styles/bg.jpg)",lableToChange(this);
      break;
      case this.value === 'mars': registrationImage.src='./styles/Mars.png', document.body.style.backgroundImage = "url(./styles/bg.jpg)",lableToChange(this);
      break;
      case this.value === 'neptune': registrationImage.src='./styles/Neptune.png', document.body.style.backgroundImage = "url(./styles/bg.jpg)",lableToChange(this);
      break;
      case this.value === 'uranus': registrationImage.src='./styles/Uran.svg', document.body.style.backgroundImage = "url(./styles/bg.jpg)",lableToChange(this);
      break;  
      default: setSneakyRicardo(this);
      break;
  }
})

function setSneakyRicardo(elem){
  registrationImage.src="./styles/Ricardo.png";
  registrationImage.style.transform = "scale(-1,1)";
  textToChange.innerText = "запись на танцы";
  lables[2].innerText ="Хариогроф";
  options[elem.selectedIndex].innerText = "Рикардо Милос";
  document.body.style.backgroundImage = "url(./styles/DiscoHall.jpg)";
}
function lableToChange(elem){
  lables[2].innerText="Планета";
}