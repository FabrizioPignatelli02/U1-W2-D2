/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 12;
let num2 = 10;

if(num1>num2)
{
  console.log("Il numero più grande è Num1:",num1);
}
else{
  console.log("Il numero più grande è Num2:", num2);
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numFornito = 5;

if(numFornito!==5)
{
  console.log("Not Equal");
}
else{
  console.log("Equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num3 = 10;

if(num3 % 5 === 0)
{
  console.log("Divisibile per 5")
}
else
{
  console.log("Non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num4 = 4;
let num5 = 4;

if(num4===8 || num5===8)
{
  console.log("Uno dei due è un numero 8");
}
else {
  console.log("Nessun numero ha come valore 8");
}
if(num4-num5===8)                                                                        
{
  console.log("La sottrazione da 8");
}
else if(num5-num4===8)
{
  console.log("La sottrazione da 8");
}
else if(num4+num5===8)
{
  console.log("L'addizione da 8");
}
else
{
  console.log("La sottrazione e l'addizione non riportano 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 40;

if(totalShoppingCart>=50)
{
  console.log("Hai diritto alla spedizione gratuita! "+"Saldo Totale:",totalShoppingCart);
}
else
 {
  console.log("Non hai diritto alla spedizione gratuita. "+"Saldo Totale:",totalShoppingCart+10);
 }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const sconto = (totalShoppingCart*20)/100;
const prezzoScontato = totalShoppingCart-sconto;

if(totalShoppingCart>=50)
{
  console.log("Hai diritto alla spedizione gratuita! "+ "In più grazie al Black Friday godi del 20% di sconto! "+"Saldo Totale:",prezzoScontato);
}
else
 {
  console.log("Non hai diritto alla spedizione gratuita. "+ "Grazie al Black Friday godi però del 20% di sconto! "+"Saldo Totale:",prezzoScontato+10);
 }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let primoNumero = 10;
let secondoNumero = 2;
let terzoNumero = 20;

if(primoNumero<secondoNumero && primoNumero<terzoNumero)
{
  if(secondoNumero<terzoNumero)
  {
    console.log("Numeri in ordine:", primoNumero, secondoNumero, terzoNumero);
  }
  else{
    console.log("Numeri in ordine:", primoNumero, terzoNumero, secondoNumero);
  }
}
else if(secondoNumero<primoNumero && secondoNumero<terzoNumero )
{
  if(primoNumero<terzoNumero)
  {
    console.log("Numeri in ordine:", secondoNumero, primoNumero, terzoNumero);
  }
  else
  {
    console.log("Numeri in ordine:", secondoNumero, terzoNumero, primoNumero);
  }
}
else if(terzoNumero<primoNumero && terzoNumero<secondoNumero)
{
  if(primoNumero<secondoNumero)
  {
    console.log("Numeri in ordine:", terzoNumero, primoNumero, secondoNumero);
  }
  else
  {
    console.log("Numeri in ordine:", terzoNumero, secondoNumero, primoNumero);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let fornito = 8;

if(typeof fornito === "number")
{
  console.log("Il dato fornito:","<",fornito,">","è un numero");
}
else
{
  console.log("Il dato fornito:","<",fornito,">","non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = 3;

if(number%2===0)
{
  console.log("Il numero",number,"è pari");
}
else
{
  console.log("Il numero",number,"è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 2;
  if (val < 10) {
      if (val < 5) {
        console.log("Meno di 5");
      }
      else
      {
        console.log("Meno di 10");
      }
    } 
     else {
      console.log("Uguale a 10 o maggiore");
    }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto"
}


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("Prima",me);
delete me.lastName;
console.log("Dopo",me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log("Prima",me);
delete me.skills.pop();
console.log("Dopo",me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
