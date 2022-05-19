let buttonGenerate = document.getElementById("btn1");
let deleteButton = document.getElementById("btn2");
deleteButton.addEventListener("click", function () {
  window.location.reload();
});
buttonGenerate.addEventListener("click", function () {
  const userName = document.getElementById("nome");
  const chiloMetri = document.getElementById("km");
  let chiloMetriN = chiloMetri.value
  const etaUtente = document.getElementById("eta");
  let etaUtenteN = etaUtente.value
  let prezzoBiglietto = chiloMetri * 0.21;
  const prezzoBigliettoSegnato = document.getElementById("prezzo");
  const offertaSegnata = document.getElementById("offerta");
  const carrozzaSegnata = document.getElementById("carrozza");
  const codiceSegnato = document.getElementById("codice");
  const userNameSegnato = document.getElementById("nome-utente");

  if (isNaN(chiloMetriN)) {
    alert("Il chilometraggio inserito non è valido");
  }

  if (chiloMetriN < 10 || chiloMetriN > 2000) {
    alert("Il chilometraggio inserito non è valido");
  }

  if (isNaN(etaUtenteN)) {
    alert("L'età inserita non è valida");
  }

  const etaUtenteLength = etaUtenteN.length;

  if (etaUtenteLength === 0) {
    alert("Inserisci la tua età!");
  }

  if (etaUtenteN < 18) {
    prezzoBiglietto = (
      chiloMetriN * 0.21 -
      (chiloMetriN * 0.21 * 20) / 100
    ).toFixed(2);
    offertaSegnata.innerHTML = "Minorenne"
  } else if (etaUtenteN >= 65) {
    prezzoBiglietto = (
      chiloMetriN * 0.21 -
      (chiloMetriN * 0.21 * 40) / 100
    ).toFixed(2);
    offertaSegnata.innerHTML = "Over 65"
  } else {
    prezzoBiglietto = (chiloMetriN * 0.21).toFixed(2);
    offertaSegnata.innerHTML = "Standard"
  }

  userNameSegnato.innerHTML = `${userName}`;
  carrozzaSegnata.innerHTML = Math.floor(Math.random() * 10) + 1;
  codiceSegnato.innerHTML = Math.floor(Math.random() * 10000) + 1;
  prezzoBigliettoSegnato.innerHTML = `${prezzoBiglietto}`;
});
