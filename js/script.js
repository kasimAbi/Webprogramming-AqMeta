// variablendeklarationen
var vorname = '';
var nachname = '';
var email = '';
var passwort = '';
var city = '';
var zipCode = '';
var street = '';
var houseNumber = '';
var isHide = false;
var isAlert = false;

// wenn login.html gestartet wird, soll erst geprüft werden ob der benutzer einen account hat. das wird mit localstorage gemacht.
function start_login() {
  // die (wenn vorhanden) gespeicherten elemente der localstorage, werden den jeweiligen variablen zugewiesen. wenn ncihts vorhanden dann ist null.
  vorname = localStorage.getItem("vorname");
  nachname = localStorage.getItem("nachname");
  email = localStorage.getItem("email");
  passwort = localStorage.getItem("passwort");
  city = localStorage.getItem("city");
  zipCode = localStorage.getItem("zipCode");
  street = localStorage.getItem("street");
  houseNumber = localStorage.getItem("houseNumber");

  // wenn vorname ungleich 0 ist, wurden die variablen erfolgreich ausgefüllt
  if (vorname != null) {
    // die Felder auf der Seite werden entsprechend gefüllt
    var setze_email = document.getElementById('inputEmail');
    setze_email.value = email;

    var setze_vorname = document.getElementById('inputFirstName');
    setze_vorname.value = vorname;

    var setze_nachname = document.getElementById('inputName');
    setze_nachname.value = nachname;

    // da diese bei der Anmeldung keine Pflichtfelder waren, werden diese kontrolliert ob die gefüllt sind.
    if (city != null) {
      var setze_city = document.getElementById('inputCity');
      setze_city.value = city;
    }
    if (zipCode != null) {
      var setze_zipCode = document.getElementById('inputZipcode');
      setze_zipCode.value = zipCode;
    }
    if (street != null) {
      var setze_street = document.getElementById('inputStreet');
      setze_street.value = street;
    }
    if (houseNumber != null) {
      var setze_houseNumber = document.getElementById('inputHousenumber');
      setze_houseNumber.value = houseNumber;
    }
    // anschließend werden alle Felder versteckt, die bei der Anmeldung nciht gebraucht werden.
    hide_daten();
  }
}

// bei der index.html, soll der benutzer begrüßt werden, wenn er einen account angelegt hat. das wird mit localStorage geprüft, ob ein vorname enthalten ist.
function greetings_user() {
  vorname = localStorage.getItem("vorname");
  // wenn vorname ungleich null ist, ist da ein account hinterlegt und der benutzer wird befrüßt
  if (vorname != null) {
    // wenn alertboc nicht angezeigt ist, wirds angezeigt und boolean(val) variable wird auf true gesetzt. beim erneuten aufruf der funktion, wirds geschlossen da boolean variable true ist und else ausgeführt wird.
    if (!isAlert) {
      document.getElementById("alertBox").style.display = "block";
      var alert_message = document.getElementById('alertMessage');
      alert_message.innerHTML = "Willkommen zurück " + vorname;
      isAlert = true;
    } else {
      document.getElementById("alertBox").style.display = "none";
      isAlert = false;
    }
  }
}

// wenn login geklickt wird, wird passwort und email geprüft. bei email ist die groß und kleinschreibung egal deswegen toLowerCase methode
function onLoginClick() {
  if (passwort == null) {
    // bei keine daten, werden die daten gespeichert.
    alert('Sie haben sich Erfolgreich angemeldet.');
    update_daten();
  } else {
    var control_email = document.getElementById('inputEmail');
    var control_passwort = document.getElementById('inputPassword');
    if (email.toLowerCase() == control_email.value.toLowerCase() && passwort.toLowerCase() == control_passwort.value.toLowerCase()) {
      // bei richtigen daten werdeen die daten geändert und man wird eingeloggt
      alert('Neue Daten gespeichert, Erdoglreich angemeldet.');
      update_daten();
    } else {
      // bei nicht richtigen daten, kommt fehlermeldung
      alert('Falsche Angaben.');
    }
  }
}

// daten übernehmen und vorhandene daten überschreiben
function update_daten() {
  // Elemente Anhand deren IDs übernehmen
  vorname = document.getElementById('inputFirstName');
  nachname = document.getElementById('inputName');
  email = document.getElementById('inputEmail');
  passwort = document.getElementById('inputPassword');
  city = document.getElementById('inputCity');
  zipCode = document.getElementById('inputZipcode');
  street = document.getElementById('inputStreet');
  houseNumber = document.getElementById('inputHousenumber');

  // mit localStorage speichern
  localStorage.setItem('vorname', vorname.value);
  localStorage.setItem('nachname', nachname.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('passwort', passwort.value);
  // da diese Elemente nicht gefüllt werden könnten, erst prüfen ob die Felder gefüllt sind.
  if (city.value.length > 0) {
    localStorage.setItem('city', city.value);
  }
  if (zipCode.value.length > 0) {
    localStorage.setItem('zipCode', zipCode.value);
  }
  if (street.value.length > 0) {
    localStorage.setItem('street', street.value);
  }
  if (houseNumber.value.length > 0) {
    localStorage.setItem('houseNumber', houseNumber.value);
  }
}

// Wenn Account vorhanden, alles verstecken, was zum einloggen nicht gebraucht wird.
function hide_daten() {
  // Elemente Anhand deren IDs bekommen
  var hide_housenumber = document.getElementById('inputHousenumber');
  var hide_vorname = document.getElementById('inputFirstName');
  var hide_nachname = document.getElementById('inputName');
  var hide_city = document.getElementById('inputCity');
  var hide_zipcode = document.getElementById('inputZipcode');
  var hide_street = document.getElementById('inputStreet');
  var button_register = document.getElementById('button-register');

  // kontrollieren ob bereits versteckt ist. wenn nicht, verstecken. wenn doch, wieder sichtbar machen.
  if (!isHide) {
    // unsichtbar machen
    hide_housenumber.style.visibility = "hidden";
    // position absolut machen
    hide_housenumber.style.position = "absolute";
    // breite auf 0px setzen
    hide_housenumber.style.width = "0px";

    hide_street.style.visibility = "hidden";
    hide_street.style.position = "absolute";
    hide_street.style.width = "0px";

    hide_zipcode.style.visibility = "hidden";
    hide_zipcode.style.position = "absolute";
    hide_zipcode.style.width = "0px";

    hide_city.style.visibility = "hidden";
    hide_city.style.position = "absolute";
    hide_city.style.width = "0px";

    hide_nachname.style.visibility = "hidden";
    hide_nachname.style.position = "absolute";
    hide_nachname.style.width = "0px";

    hide_vorname.style.visibility = "hidden";
    hide_vorname.style.position = "absolute";
    hide_vorname.style.width = "0px";

    // registerbutton textinhalt in html ändernt auf Nicht registriert.
    button_register.innerHTML = "Nicht registriert?";

    // versteckt auf true setzen um wieder sichtbar machen zu können.
    isHide = true;
  } else {
    // sichtbar machen
    hide_housenumber.style.visibility = "visible";
    // position relative machen
    hide_housenumber.style.position = "relative";
    // breite wieder auf 100%
    hide_housenumber.style.width = "100%";

    hide_street.style.visibility = "visible";
    hide_street.style.position = "relative";
    hide_street.style.width = "100%";

    hide_zipcode.style.visibility = "visible";
    hide_zipcode.style.position = "relative";
    hide_zipcode.style.width = "100%";

    hide_city.style.visibility = "visible";
    hide_city.style.position = "relative";
    hide_city.style.width = "100%";

    hide_nachname.style.visibility = "visible";
    hide_nachname.style.position = "relative";
    hide_nachname.style.width = "100%";

    hide_vorname.style.visibility = "visible";
    hide_vorname.style.position = "relative";
    hide_vorname.style.width = "100%";

    // registerbutton textinhalt in html ändernt auf schon registriert.
    button_register.innerHTML = "Schon registriert?";

    // versteckt auf false setzen um wieder unsichtbar machen zu können.
    isHide = false;
  }
}
