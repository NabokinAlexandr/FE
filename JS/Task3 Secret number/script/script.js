let b = 100;
let a = 0;
const secretNum = Math.floor(Math.random() * 101);
let userNum;
let current = 0;
let currentMashine = 0;

let myNum;
// let c = 0;
// let f = 100;
let j = 50;
let up;
let down;

document.getElementById("inp").addEventListener("keydown", function(e){
  if (e.keyCode === 13) {
    userNum = e.target.value;
    checkUserNum()
  }
});

function checkUserNum(){
  if(userNum < a || userNum > b) {
    alert(`Enter number from ${a} to ${b}`);
  } else {
    if(userNum < secretNum) {
      a = userNum;
      document.getElementById("start").innerHTML = a;
    } else if(userNum > secretNum) {
      b = userNum;
      document.getElementById("end").innerHTML = b;
    } else {
      alert(`Точно! Вы угадали за ${current} попыток!`);
    }
    
  }
  current+=1;

}

function notice() {
  alert(`Точно! Вы угадали число ${j} за ${currentMashine} попыток!`);
}

document.getElementById("inp2").addEventListener("keydown", function(event){
  if (event.keyCode === 13) {
    myNum = event.target.value;
    if(myNum < a || myNum > b) {
      alert(`Enter number from ${a} to ${b}`);
    } else {
      document.getElementById("inp3").innerHTML = j;
    }
    currentMashine+=1;
  }
  
  console.log(currentMashine);
  
});

document.getElementById("more").addEventListener("click", function(event){
  j = j + 1;
  document.getElementById("inp3").innerHTML = j;
  currentMashine+=1;
  console.log(currentMashine);
  if(j == myNum) {
    setTimeout(notice, 0);
    
  }
});

document.getElementById("less").addEventListener("click", function(event){
  j = j - 1;
  document.getElementById("inp3").innerHTML = j;
  currentMashine+=1;
  console.log(currentMashine);
  if(j == myNum) {
    setTimeout(notice, 0);
  }
});




document.getElementById("start").innerHTML = a; 
document.getElementById("end").innerHTML = b;
