const audio = new Audio('mixkit-positive-interface-click-1112.wav')

function n(dato){ 
  audio.play()
  document.getElementById("operazioni").value+=dato;
  /** Prendo il display. Alla funzione viene passato l'id dell'input cliccato. Al value del display viene assegnato il valore dell'ID dell'input in concatenazione */ 
}
   
function operazione() { 
  audio.play()
  document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value); 
  /** Prendo il display. Alla funzione operazione(), con il metodo eval() i valori presenti vengono operati */ 
}
   
function cancella() {
  audio.play() 
  document.getElementById("operazioni").value="";
   /** Prendo il display. Alla funzione cancella() il valore torna vuoto */ 
}



