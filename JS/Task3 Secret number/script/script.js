let b = 100;
let a = 0;
const secretNum = Math.floor(Math.random() * 101);
let userNum;
let myNum;
let current = 0;
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


document.getElementById("start").innerHTML = a; 
document.getElementById("end").innerHTML = b;