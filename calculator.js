let calculation = '';
// let num = ''; 

function print1(){
  
  document.querySelector('.result').innerHTML =calculation += 1;

};


function print2(){
  document.querySelector('.result').innerHTML =calculation += 2;
};

function print3(){
  document.querySelector('.result').innerHTML =calculation += 3;
};

function print4(){
  document.querySelector('.result').innerHTML =calculation += 4;
};

function print5(){
  document.querySelector('.result').innerHTML =calculation += 5;
};

function print6(){
  document.querySelector('.result').innerHTML =calculation += 6;
};

function print7(){
  document.querySelector('.result').innerHTML =calculation += 7;
};

function print8(){
  document.querySelector('.result').innerHTML =calculation += 8;
};

function print9(){
  document.querySelector('.result').innerHTML =calculation += 9;
}


function print0(){
  document.querySelector('.result').innerHTML =calculation += 0;
}

function add(){
  document.querySelector('.result').innerHTML =calculation += ` + `;
}
function decimal(){
  document.querySelector('.result').innerHTML =calculation += `.`;
}

function multiply(){
  document.querySelector('.result').innerHTML =calculation += ` * `;
}

function minus(){
  document.querySelector('.result').innerHTML =calculation += ` - `;
}

function divide(){
  document.querySelector('.result').innerHTML =calculation += ` / `;
}
function equalTo(){

 document.querySelector('.result').innerHTML = eval(calculation)
}

function empty() {

  calculation = "";
  document.querySelector('.result').innerHTML = ' '
}
// let calculation = ""; // assume this holds some expression

// function add(number) {
//   calculation += number;
//   console.log(number + ' +');
// }
