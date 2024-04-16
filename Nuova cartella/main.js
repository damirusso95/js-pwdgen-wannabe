// chiedo nome
let nomeUtente = prompt('Quale é il tuo nome?');
// chiedo cognome
let cognomeUtente = prompt('Quale é il tuo cognome?');
// chiedo colore
let coloreUtente = prompt('Quale é il tuo colore preferito?');
// chiedo data di nascita
let annoUtente = prompt('Quale é il tuo anno di nascita?');
// risultato fisso per data di nascita
annoUtente = '#24';
// risultato
let outputContainer = document.getElementById('pswgenerator');
outputContainer.innerText = '\nEcco la tua password insgamabile:\n' + nomeUtente + cognomeUtente + coloreUtente + annoUtente;