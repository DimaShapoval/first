const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const lables = document.querySelectorAll('lable');
const options = document.querySelectorAll('option');
const button = document.getElementById('button');
let age;

selectEl.addEventListener('change', function(){
  
  switch(true){
      case this.value === 'mercury': registrationImage.src="./styles/Planet.svg",lableToChange(this);
      break;
      case this.value === 'venus': registrationImage.src='./styles/Venus.png', lableToChange(this);
      break; 
      case this.value === 'earth': registrationImage.src='./styles/Earth.png', lableToChange(this);
      break;
      case this.value === 'mars': registrationImage.src='./styles/Mars.png', lableToChange(this);
      break;
      case this.value === 'neptune': registrationImage.src='./styles/Neptune.png', lableToChange(this);
      break;
      case this.value === 'uranus': registrationImage.src='./styles/Uran.svg', lableToChange(this);
      break;  
      default: age = prompt("Сколько вам лет?");
      if(age<0){
        alert("Такого возрвста не сущетвует")
      }
      else if(age<18 && age>0){
        alert("Вам ещё нельзя такое видеть");
      }
       else{
        setSneakyRicardo(this);
      }
     
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
  textToChange.innerText = "полёта в космос";
  registrationImage.style.transform="scale(1,1)";
  lables[2].innerText="Планета";
  options[6].innerText = "Юпитер";
  document.body.style.backgroundImage = "url(./styles/bg.jpg)"
  
  
}
