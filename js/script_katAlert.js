var isAlert = false;

// alertbox anzeigen und verstecken. zum beispiel bei einer fehlermeldung
function not_available() {
  if (!isAlert) {
    document.getElementById("alertBox").style.display = "block";
    isAlert = true;
  } else {
    document.getElementById("alertBox").style.display = "none";
    isAlert = false;
  }
}
