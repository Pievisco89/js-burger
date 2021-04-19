/* References */
var prezzoBurger = document.getElementById('price');
var btn = document.getElementById('button');
var nomeBurger = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');/* referenza per tutti gli elementi con la classe ingredient-checkbox */
var coupon = document.getElementById('coupon');

/* Settings */

var prezzoBase = 50;
var coupons = ["sconto2021", "sconto-bool"]; /*array con i due codici sconto*/
var sconto = 0.3;
writePrice(prezzoBase, prezzoBurger);

/* Events */
btn.addEventListener('click', function(){

  /* controlliamo nome inserito utilizzando value (mi restituisce il valore dell'input) e length (per il numero di elementi) */
  var nomeInserito = nomeBurger.value.trim();/* per togliere eventuali spazi prima e dopo */

  if(nomeInserito.length < 3){ 
    /* per inserire un nome di almeno 3 caratteri*/
    alert("Attenzione: nome inserito non corretto! \nInserisci almeno tre caratteri!");

  }else{
    /* da mettere fuori dal ciclo for per riuscire a calcolare prezzo totale ingredienti*/
    var prezzoIngredienti = 0; 

    /* vedere quali ingredienti sono stati selezionati */ 
    for(var i = 0; i < ingredients.length; i++){
      var ingredient = ingredients[i];

      if(ingredient.checked === true){ 
        /*calcolare il prezzo degli ingredienti selezionati tramite .value*/
        prezzoIngredienti += parseInt(ingredient.value);
      }
    }

    var prezzoTotale = prezzoBase + prezzoIngredienti;

    /* controllare se viene inserito uno sconto */
    if(coupons.includes(coupon.value)){ /* controllo se l'input è presente nell'array coupons. Non cambiava nulla aggiungere "=== 0" */
      
      prezzoTotale = calcDiscount(prezzoTotale, sconto);/* prezzo totale scontato */
      console.log(prezzoTotale);
    }

    writePrice (prezzoTotale, prezzoBurger) /*stampo prezzo totale burger tramite funzione creata all'inizio*/
  }
  
});

/* Functions */
/* creare una funzione per stampare il prezzo sul target html */
function writePrice(value, target) {
  target.innerHTML = value.toFixed(2);
}

/* creare una funzione per lo sconto */
function calcDiscount(priceTot, disc){
  return priceTot -= priceTot * disc; /* potevo anche scrivere prezzoTotale *= (1 - disc) */ 
}