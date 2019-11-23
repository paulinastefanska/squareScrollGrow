const square = document.createElement('div');
document.body.appendChild(square);

let grow = true; //flag
let size = 100; //square size
square.style.width = size + "px"; //"100px"
square.style.height = size + "px";

window.addEventListener("scroll", function () {

  if (size >= this.window.innerWidth * 0.2) { 
    grow = !grow; //false
  } else if (size <= 20) {
    grow = !grow; //true
  }

  if (grow) { //true
    size += 2;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 2;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
})