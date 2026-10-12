const hostEl = document.getElementById("host");
const loadedEl = document.getElementById("loaded-at");

hostEl.textContent = window.location.hostname || "local file";
loadedEl.textContent = new Date().toLocaleString();
