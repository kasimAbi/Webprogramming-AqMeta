// zum hochziehen der betreff label elemente, wenn man auf das Feld betreff anklickt
function focusBetreff() {
  var label_betreff = document.getElementById('labelBetreff');
  label_betreff.style.top = "0";
}

// zum runterziehen der betreff label elemente, wenn man das betreff Feld verlässt und da kein inhalt ist
function focusOutBetreff() {
  var input_betreff = document.getElementById('inputBetreff');
  if (!input_betreff.value.length > 0) {
    var label_betreff = document.getElementById('labelBetreff');
    label_betreff.style.top = "50%";
  }
}

// zum hochziehen der message label elemente, wenn man auf das Feld message anklickt
function focusMessage() {
  var label_message = document.getElementById('labelMessage');
  label_message.style.top = "0";
}

// zum runterziehen der message label elemente, wenn man das message Feld verlässt und da kein inhalt ist
function focusOutMessage() {
  var input_message = document.getElementById('inputMessage');
  if (!input_message.value.length > 0) {
    var label_message = document.getElementById('labelMessage');
    label_message.style.top = "16px";
  }
}
