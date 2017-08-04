const date = new Date();
const hours = date.getHours();
let day = true;
if(hours < 6 || hours > 17){
  day = false;
};
const pizza = document.getElementById("pizza-logo");
const music = document.getElementById("music-logo");
const code = document.getElementById("code-logo");
const wrapper = document.querySelector('.wrapper');
if(!day){
  wrapper.className = `${wrapper.className} night`;
  wrapper.style.backgroundImage = "url(./assets/background-2.jpg)";
  pizza.className = `${pizza.className} night`;
  pizza.src = "./assets/pizza-night.svg";
  code.className = `${code.className} night`;
  code.src = "./assets/code-night.svg";
  music.className = `${music.className} night`;
  music.src = "./assets/music-night.svg"
}
