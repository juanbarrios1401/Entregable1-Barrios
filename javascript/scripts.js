class Calculadora {
    constructor(elementoPantalla, elementoUltimaOperacion) {
        this.elementoPantalla = elementoPantalla;
        this.elementoUltimaOperacion = elementoUltimaOperacion;
        this.limpiar();
        this.cargarUltimaOperacion();// Carga la última operación 
    }

    limpiar() {
        this.operandoActual = "";
        this.operandoAnterior = "";
        this.operacion = null;
        this.actualizarPantalla();
        this.elementoUltimaOperacion.value = "";  // Reinicia la calculadora
    }

    borrar() {
        this.operandoActual = this.operandoActual.slice(0, -1);
        this.actualizarPantalla(); // Elimina el último número ingresado
    }

    agregarNumero(numero) {
        if (numero === "." && this.operandoActual.includes(".")) return;
        this.operandoActual += numero;
        this.actualizarPantalla();// Agrega números al display
    }
    seleccionarOperacion(operacion) {
        if (this.operandoActual === "") return;
        if (this.operandoAnterior !== "") this.calcular();
        this.operacion = operacion;
        this.operandoAnterior = this.operandoActual;
        this.operandoActual = "";
        this.actualizarPantalla();// Selecciona la operación
    }
    // Hace la cuenta
    calcular() {
        const anterior = parseFloat(this.operandoAnterior);
        const actual = parseFloat(this.operandoActual);
        if (isNaN(anterior) || isNaN(actual)) return;

        let resultado;
        switch (this.operacion) {
            case "+":
                resultado = anterior + actual;
                break;
            case "-":
                resultado = anterior - actual;
                break;
            case "*":
                resultado = anterior * actual;
                break;
            case "/":
                resultado = actual === 0 ? "Error" : anterior / actual;
                break;
            default:
                return;
        }

        const ultimaOperacion = `${this.operandoAnterior} ${this.operacion} ${this.operandoActual} = ${resultado}`;

        this.elementoUltimaOperacion.value = ultimaOperacion;
        this.guardarUltimaOperacion(ultimaOperacion); // Guarda la última operación en localStorage

        this.operandoActual = resultado.toString();
        this.operacion = null;
        this.operandoAnterior = "";
        this.actualizarPantalla();
    }

    // Actualiza la pantalla
    actualizarPantalla() {
        this.elementoPantalla.textContent = this.operandoActual || "0";
    } 

    // Guarda la última operación en localStorage
    guardarUltimaOperacion(operacion) {
        localStorage.setItem("ultimaOperacion", operacion);
    }

    // Carga la última operación desde localStorage
    cargarUltimaOperacion() {
        const operacionGuardada = localStorage.getItem("ultimaOperacion");
        if (operacionGuardada) {
            this.elementoUltimaOperacion.value = operacionGuardada;
        }
    }
}

// Carga la calculadora
document.addEventListener("DOMContentLoaded", () => {
    const elementoPantalla = document.getElementById("pantalla");
    const elementoUltimaOperacion = document.getElementById("ultima-operacion");
    const botones = document.querySelectorAll(".btn");

    const calculadora = new Calculadora(elementoPantalla, elementoUltimaOperacion);

    botones.forEach((boton) => {
        const accion = boton.dataset.action;
        const valor = boton.value;

        boton.addEventListener("click", () => {
            if (accion === "limpiar") calculadora.limpiar();
            else if (accion === "borrar") calculadora.borrar();
            else if (accion === "operacion") calculadora.seleccionarOperacion(valor);
            else if (accion === "igual") calculadora.calcular();
            else calculadora.agregarNumero(valor);
        });
    });
});

