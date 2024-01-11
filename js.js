function convertirTemperatura() {
    // Obtener el valor ingresado por el usuario
    let temperaturaCelsius = document.getElementById("temperatura").value;

    // Validar si la entrada es un número
    if (isNaN(temperaturaCelsius)) {
        alert("Por favor, ingrese un valor numérico.");
        return;
    }

    // Convertir la temperatura a números y realizar las conversiones
    temperaturaCelsius = parseFloat(temperaturaCelsius);
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    // Mostrar los resultados en el DOM
    document.getElementById("resultado").innerHTML = "Grados Kelvin: " + temperaturaKelvin.toFixed(2) + "<br>Grados Fahrenheit: " 
    + temperaturaFahrenheit.toFixed(2);
}
