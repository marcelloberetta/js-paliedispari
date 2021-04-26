//CHIEDIAMO ALL'UTENTE DI INSERIRE UNA PAROLA

var parolaInserita= prompt("Dimmi una parola");

//CONVERTIAMO LA STRINGA RICEVUTA DALL'UTENTE IN CARATTERI MINUSCOLI PER EVITARE IL PROBLEMA DEL CASE SENSITIVE

var parolaUtente = parolaInserita.toLowerCase();


//ESECUZIONE FUNZIONE
var parolaGirata = rovesciaParola(parolaUtente);
console.log(parolaGirata);


if (parolaGirata == parolaUtente){
  alert ("La parola E' palindroma");
}
else{
alert ('La parola NON è palindroma');
}









//FUNZIONE
function rovesciaParola(parola){
  var parolaReverse = '';

  for (var i = parola.length - 1; i >=0; i--){
    parolaReverse += parola [i];
  }
  return parolaReverse;
}