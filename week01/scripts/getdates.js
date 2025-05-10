// Get and display current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get and format last modified date
const oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${oLastModif.toLocaleDateString()} ${oLastModif.toLocaleTimeString()}`;