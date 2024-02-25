// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function cambiaNome(titolo) {
    document.getElementById("titoloNegozio").textContent = titolo
}
cambiaNome("Valerio Mancini Shop") 


//ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function cambiaColore(colore) {
    document.body.style.backgroundColor = colore;
}
cambiaColore("yellow") 
cambiaColore("white") 


/* ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in 
un altro, fittizio */

function cambiaIndirizzoFooter(indirizzoNuovo) {
    document.getElementById("footer").textContent = indirizzoNuovo
}
cambiaIndirizzoFooter("Via grotte 95, Pontelandolfo(BN)")



/* ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS 
ad ogni link Amazon della tabella */

function cambiaClasseDescrizioneNegozio(nuovaClasse) {
    var descrizioneNegozio = document.getElementById('descrizioneNegozio');
    descrizioneNegozio.classList.remove(descrizioneNegozio.className);
    descrizioneNegozio.classList.add(nuovaClasse);
}
cambiaClasseDescrizioneNegozio("secondop") 


/* ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS 
a tutte le immagini della tabella; 
questa classe deve modificare la visibilità/invisibilità dell'immagine */


function toggleVisibilitaImmagini() {
    var immagini = document.querySelectorAll('#tabellaProdotti img');
    immagini.forEach(function(img) {
        img.classList.toggle('nascosto');
    });
}

