class moneda {
    constructor(id,nombre,valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;    
}

    calcularvalor(peso){
        return this.valor * peso
    }

} // Creo la clase monedas

const monedas = [] //Array de monedas

monedas.push(new moneda(1, "Peso", 1))
monedas.push(new moneda(2, "Dolar", 273.62))
monedas.push(new moneda(3, "Euro", 301.65))
monedas.push(new moneda(4, "Libra", 352.04))
monedas.push(new moneda(5, "Yen", 38.27)) //Agrego las monedas al array


class juego{
    constructor(id_juego,nombre_juego,moneda_juego,precio_juego) {
        this.id_juego = id_juego;
        this.nombre_juego = nombre_juego;
        this.moneda_juego = moneda_juego;
        this.precio_juego = precio_juego;
}} //Clase juegos

const juegos = [] //Array de juegos

juegos.push(new juego(1, "Fifa 2023", 2, 60.50))
juegos.push(new juego(2, "Los sims", 1, 4500))
juegos.push(new juego(3, "God of War", 3, 20))
juegos.push(new juego(4, "OnlyUp", 4, 2))
juegos.push(new juego(5, "League of Legends", 2, 100))

//Programa principal

