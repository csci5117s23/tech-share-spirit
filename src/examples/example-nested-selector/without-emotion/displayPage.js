darkMode = false;

function toggleDarkmode() {
    darkMode = !darkMode;
    if(darkMode) {
        document.getElementsByTagName("body")[0].classList.add("darkmode");
    } else {
        document.getElementsByTagName("body")[0].classList.remove("darkmode");
    }
}