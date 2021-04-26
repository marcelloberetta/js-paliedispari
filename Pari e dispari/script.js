var scelta = prompt('Scegli pari o dispari?');
// console.log(scelta);

var numero = parseInt(prompt('indica un numero da 1 a 5'));
// console.log(numero);

var numeroCheck = (numero + randomGenerator(1, 10));
console.log(numeroCheck);

if (scelta == 'pari' && isEven(numeroCheck) == true){
 alert('hai vinto');
}
else if (scelta == 'dispari' && isEven(numeroCheck)== false) {
  alert('hai vinto');
}
else {
  alert('hai perso');
}


//------------------------------------------------------------------//



function randomGenerator (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1));
  return random;
}


// pari
function isEven (numero){
  if (numero % 2 == 0) {
    return true;
  }
  else{
    return false;
  }
}
console.log(isEven());