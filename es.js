function n(dato){ 
  document.getElementById("operazioni").value+=dato;
  /** Prendo il display. Alla funzione viene passato l'id dell'input cliccato. Al value del display viene assegnato il valore dell'ID dell'input in concatenazione */ 
}
   
function operazione() { 
  document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value); 
  /** Prendo il display. Alla funzione operazione(), con il metodo eval() i valori presenti vengono operati*/ 
}
   
function cancella() { 
  document.getElementById("operazioni").value=""; 
}



