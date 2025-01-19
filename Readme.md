## Entregable N2 ##

# Apellido y nombre: Barrios, Juan Francisco #


### C A L C U L A D O R A ###

Hola profre, paso a comentar un poco sobre mi entrega.

La entrega se basa en una calculadora simplona, lo que hace es " + (sumar), - (restar), / (dividir) y * (multiplicar).

Asi mismo esta tiene un apartado como "ultima operacion", que lo que hace es almacenar esa ultima operacion al refrescar la pagina (localstorage).
Por otra parte tambien almacena el resultado reciente y, nos permite seguir trabajando sobre ese mismo resultado.

Otra consideracion a tener en cuenta es que, tal vez error, o atrevimiento, es ver que me podia ahorrar muchas lineas de código (despues de haber roto todo e investigar)
con el uso de "querySelectorAll" en vez de un Arrays, que pudo haber sido el siguiente :


#################################################################################

 const botones = [
    document.querySelector(".btn[data-action='limpiar']"),
    document.querySelector(".btn[data-action='borrar']"),
    document.querySelector(".btn[data-action='operacion][value='/']"),
    document.querySelector(".btn[data-action='operacion'][value='*']"),
    document.querySelector(".btn[value='7']"),
    document.querySelector(".btn[value='8']"),
    document.querySelector(".btn[value='9']"),
    document.querySelector(".btn[data-action='operacion'][value='-']"),
    document.querySelector(".btn[value='4']"),
    document.querySelector(".btn[value='5']"),
    document.querySelector(".btn[value='6']"),
    document.querySelector(".btn[data-action='operacion][value='+']"),
    document.querySelector(".btn[value='1']"),
    document.querySelector(".btn[value='2']"),
    document.querySelector(".btn[value='3']"),
    document.querySelector(".btn[data-action='igual']"),
    document.querySelector(".btn[value='0']"),
    document.querySelector(".btn[value='.']")
];

Despues con respecto a lo demas, creo que esta dentro de lo aceptable.

PD: vuelvo a repetir, disculpas desde ya por el atrevimiento si es que esta mal, por eso mismo dejo el ejemplo del arrays en el readme (no aplicado, obviamente).

### SALUDOS!!!