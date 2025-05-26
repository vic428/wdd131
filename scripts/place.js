// Function to calculate wind chill in °C
const calculateWindChill = (temp, windSpeed) => 
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));

// Static values from the HTML display
const temperature = 10; // °C (matches your displayed value)
const windSpeed = 5;    // km/h (matches your displayed value)

// DOM update function
function updateWindChill() {
    const windChillElement = document.getElementById('windChillValue');
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`; // One decimal place to match your example
    } else {
        windChillElement.textContent = '';
    }
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Update copyright year
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    
    // Update last modified date
    const oLastModif = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = `Last Modification: ${oLastModif.toLocaleString()}`;
    
    // Calculate and display wind chill
    updateWindChill();
});