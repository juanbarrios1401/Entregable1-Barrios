// Convertidor de unidades de medida de distancia

// Función principal del convertidor de unidades
function convertirUnidades() {
    const unidades = ["metros", "centimetros", "milimetros", "kilometros", "millas"]; // Array con las unidades admitidas
    let continuar = true; // Variable de control para el ciclo while

    while (continuar) {
        // Solicitar la distancia y la unidad de origen al usuario
        let cantidad = parseFloat(prompt("Ingrese la cantidad de la distancia (solo números):"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese un número válido y mayor a 0.");
            continue;
        }

        let unidadOrigen = prompt(`Ingrese la unidad de la distancia (${unidades.join(", ")})`).toLowerCase();
        if (!unidades.includes(unidadOrigen)) {
            alert("Unidad no válida. Inténtelo de nuevo.");
            continue;
        }

        let unidadDestino = prompt(`Ingrese la unidad a la que desea convertir (${unidades.join(", ")})`).toLowerCase();
        if (!unidades.includes(unidadDestino)) {
            alert("Unidad no válida. Inténtelo de nuevo.");
            continue;
        }

        // Conversión de la cantidad a metros
        let cantidadEnMetros;
        switch (unidadOrigen) {
            case "metros":
                cantidadEnMetros = cantidad;
                break;
            case "centimetros":
                cantidadEnMetros = cantidad / 100;
                break;
            case "milimetros":
                cantidadEnMetros = cantidad / 1000;
                break;
            case "kilometros":
                cantidadEnMetros = cantidad * 1000;
                break;
            case "millas":
                cantidadEnMetros = cantidad * 1609.34;
                break;
        }

        // Conversión de la cantidad en metros a la unidad de destino
        let cantidadConvertida;
        switch (unidadDestino) {
            case "metros":
                cantidadConvertida = cantidadEnMetros;
                break;
            case "centimetros":
                cantidadConvertida = cantidadEnMetros * 100;
                break;
            case "milimetros":
                cantidadConvertida = cantidadEnMetros * 1000;
                break;
            case "kilometros":
                cantidadConvertida = cantidadEnMetros / 1000;
                break;
            case "millas":
                cantidadConvertida = cantidadEnMetros / 1609.34;
                break;
        }

        alert(`La cantidad de ${cantidad} ${unidadOrigen} es equivalente a ${cantidadConvertida.toFixed(2)} ${unidadDestino}.`);

        // Preguntar si el usuario desea realizar otra conversión
        let respuesta = prompt("¿Desea realizar otra conversión? (si/no):").toLowerCase();
        if (respuesta !== "si") {
            continuar = false;
            alert("Gracias por utilizar el convertidor de unidades. ¡Hasta luego!");
        }
    }
}

// Iniciar el convertidor de unidades
convertirUnidades();