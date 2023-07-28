class moneda {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }

    calcularvalor(peso) {
        return this.valor * peso
    }

} // Creo la clase monedas

const monedas = [] //Array de monedas

monedas.push(new moneda(1, "Peso", 1))
monedas.push(new moneda(2, "Dolar", 273.62))
monedas.push(new moneda(3, "Euro", 301.65))
monedas.push(new moneda(4, "Libra", 352.04))
monedas.push(new moneda(5, "Yen", 38.27)) //Agrego las monedas al array


class juego {
    constructor(id_juego, nombre_juego, moneda_juego, precio_juego) {
        this.id_juego = id_juego;
        this.nombre_juego = nombre_juego;
        this.moneda_juego = moneda_juego;
        this.precio_juego = precio_juego;
    }
} //Clase juegos

const juegos = [] //Array de juegos

juegos.push(new juego(1, "Fifa 2023", monedas[2], 60.50))
juegos.push(new juego(2, "Los sims", monedas[1], 4500))
juegos.push(new juego(3, "God of War", monedas[3], 20))
juegos.push(new juego(4, "OnlyUp", monedas[4], 2))
juegos.push(new juego(5, "League of Legends", monedas[2], 100))

impuestopais = 0 //Variable impuesto

//Funciones del programa 

//Listado de juegos
function mostrarJuegos(juegos) {
    let mensaje = "Este es el listado de juegos con su identificador:\n";

    for (let i = 0; i < juegos.length; i++) {
        mensaje += juegos[i].nombre_juego + " " + juegos[i].id_juego + "\n";
    }

    alert(mensaje);
}

//Elegir juego

function seleccionjuego(videojuego) {
    switch (videojuego) {
        case 0:
            nombrenuevoj = prompt("Ingrese el nombre del nuevo juego");
            precionuevoj = parseFloat(prompt("Ingrese el precio del nuevo juego"));
            val = 0;
            while (val === 0) {
                monedanuevoj = prompt("Ingrese el nombre de la moneda del nuevo juego").toLowerCase();
                switch (monedanuevoj) {
                    case "peso":
                        monedanuevoj = monedas[0];
                        val = 1;
                        break;
                    case "dolar":
                        monedanuevoj = monedas[1];
                        val = 1;
                        break;
                    case "euro":
                        monedanuevoj = monedas[2];
                        val = 1;
                        break;
                    case "libra":
                        monedanuevoj = monedas[3];
                        val = 1;
                        break;
                    case "yen":
                        monedanuevoj = monedas[4];
                        val = 1;
                        break;
                    default:
                        val = 0;
                        break;
                }
            }

            nj = juegos.length + 1;
            const nuevojuego = new juego(nj, nombrenuevoj, monedanuevoj, precionuevoj);
            juegos.push(nuevojuego);
            break;
        case 1:
            j = 1;
            break;
        case 2:
            j = 2;
            break;
        case 3:
            j = 3;
            break;
        case 4:
            j = 4;
            break;
        case 5:
            j = 5;
            break;
        case -1:
            break;
    }
}

//Calculo del juego

function impuesto() {
    const cuenta = (impuestopais * juegos[j].precio_juego) / 100;
    return cuenta;
}



// PROGRAMA COMPLETO

mostrarJuegos(juegos); // Muestro los juegos

let videojuego = parseInt(prompt("Seleccione el juego que desea cotizar. Si desea ingresar un nuevo juego ingrese 0. Si desea salir, ingrese -1"));

let impuestopais;
do {
    impuestopais = parseInt(prompt("Ingrese el número de porcentaje de impuestos de su país. Solo el número, sin signos, ni letras"));
    if (isNaN(impuestopais)) {
        alert("Ingrese un número válido.");
    }
} while (isNaN(impuestopais));

// Cálculo final
let costofinal = 0;
if (juegos[videojuego]) {
    if (juegos[videojuego].moneda_juego !== monedas[1]) {
        costofinal = juegos[videojuego].precio_juego + impuesto();
    } else {
        costofinal = juegos[videojuego].precio_juego;
    }
}

// Muestra del precio
alert("El costo total es de: $" + costofinal);
