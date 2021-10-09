const letters = document.querySelectorAll('.letter');

function randomColor(){
  let r = Math.floor(Math.random()*256);
  let g = 0;
  let b = Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`
}

setInterval(function(){
  for(let letter of letters){
    letter.style.color = randomColor();
  }
},500)

