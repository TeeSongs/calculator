let calculation = '';
// let num = ''; 
let awaitingSquareRoot = false;
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
function equalTo() {
  if (calculation.includes('√')) {
    // Replace all √N with the square root of N
    calculation = calculation.replace(/√(\d+(\.\d+)?)/g, (match, num) => {
      return Math.sqrt(parseFloat(num));
    });

    // Remove any spaces that may cause eval to fail
    const sanitized = calculation.replace(/\s+/g, '');
    try {
      const result = eval(sanitized);
      document.querySelector('.result').innerHTML = result;
      calculation = result.toString();
    } catch (e) {
      document.querySelector('.result').innerHTML = 'Error';
      calculation = '';
    }

  } else if (calculation.includes('^2')) {
    // Handle squaring
    const base = parseFloat(calculation.replace('^2', ''));
    calculation = Math.pow(base, 2);
    document.querySelector('.result').innerHTML = calculation;

  } else if (calculation.includes('%')) {
    // Handle percentage
    const value = parseFloat(calculation.replace('%', ''));
    calculation = value / 100;
    document.querySelector('.result').innerHTML = calculation;

  } else {
    // Regular evaluation
    document.querySelector('.result').innerHTML = eval(calculation);
  }
}


function empty() {

  calculation = "";
  document.querySelector('.result').innerHTML = ' '
}

function squareRoot() {
  document.querySelector('.result').innerHTML = calculation += `√`
}
function square() {
  document.querySelector('.result').innerHTML = calculation += `^2`;
}
function percent() {
  document.querySelector('.result').innerHTML = calculation += `%`;
}







