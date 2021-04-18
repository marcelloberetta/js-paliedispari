//CHIEDIAMO ALL'UTENTE DI INSERIRE UNA PAROLA

var parolaInserita= prompt("Dimmi una parola");

//CONVERTIAMO LA STRINGA RICEVUTA DALL'UTENTE IN CARATTERI MINUSCOLI PER EVITARE IL PROBLEMA DEL CASE SENSITIVE

var parolaUtente = parolaInserita.toLowerCase();


// console.log(parolaUtente);



var parolaInversa;


 for(i=0; i<parolaUtente.length; i++{

 var carattere = parolaUtente[i];
 parolaInversa += carattere;
 

}

console.log(parolaInversa);