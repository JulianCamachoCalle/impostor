const jugadoresActuales = [
    "Kylian Mbappé", "Erling Haaland", "Jude Bellingham", "Vinícius Júnior",
    "Phil Foden", "Harry Kane", "Kevin De Bruyne", "Rodri", "Bukayo Saka",
    "Victor Osimhen", "Mohamed Salah", "Lionel Messi", "Bernardo Silva",
    "Bruno Fernandes", "Pedri", "Jamal Musiala", "Lautaro Martínez",
    "Florian Wirtz", "Federico Valverde", "Declan Rice", "Martin Ødegaard",
    "Trent Alexander-Arnold", "João Cancelo", "Rúben Dias", "Virgil van Dijk",
    "Marquinhos", "Mike Maignan", "Thibaut Courtois", "Alisson Becker",
    "Ederson", "Robert Lewandowski", "Neymar Jr.", "Son Heung-min",
    "Luis Díaz", "Khvicha Kvaratskhelia", "Rafael Leão", "Ousmane Dembélé",
    "Antoine Griezmann", "Luka Modrić", "Toni Kroos", "İlkay Gündoğan",
    "Joshua Kimmich", "Frenkie de Jong", "Aurélien Tchouaméni",
    "Enzo Fernández", "Julián Álvarez", "Gabriel Martinelli",
    "Christopher Nkunku", "Mason Mount", "Jack Grealish", "Marcus Rashford",
    "Darwin Núñez", "Dušan Vlahović", "Serge Gnabry", "Kingsley Coman",
    "Nicolò Barella", "Sandro Tonali", "Theo Hernández", "Alphonso Davies",
    "Achraf Hakimi", "Reece James", "Andrew Robertson", "Ronald Araújo",
    "David Alaba", "William Saliba", "Jules Koundé", "Éder Militão",
    "Manuel Neuer", "Jan Oblak", "Gianluigi Donnarumma", "Unai Simón",
    "Marc-André ter Stegen", "Gerard Moreno", "Ciro Immobile",
    "Romelu Lukaku", "Karim Benzema", "Sadio Mané", "Riyad Mahrez",
    "Thomas Müller", "Paulo Dybala", "Mauro Icardi", "Alejandro Garnacho",
    "Ansu Fati", "Gavi", "Nico Williams", "Lamine Yamal", "Jude Soonsup-Bell",
    "Endrick", "Arda Güler", "Warren Zaïre-Emery", "Mathys Tel",
    "Youssoufa Moukoko", "Evan Ferguson", "Rasmus Højlund", "Xavi Simons",
    "Cole Palmer", "Jeremy Doku", "Takefusa Kubo", "Kaoru Mitoma",
    "Min-jae Kim", "Josko Gvardiol", "Benoît Badiashile", "Levi Colwill"
];

// Array de 50 leyendas del fútbol
const jugadoresLeyendas = [
    "Pelé", "Diego Maradona", "Johan Cruyff", "Franz Beckenbauer",
    "Alfredo Di Stéfano", "Ferenc Puskás", "Garrincha", "Zinedine Zidane",
    "Ronaldo Nazário", "Ronaldinho", "Zico", "Michel Platini",
    "Marco van Basten", "Lothar Matthäus", "Paolo Maldini", "Franco Baresi",
    "Roberto Baggio", "Romário", "George Best", "Eusébio",
    "Bobby Charlton", "Gerd Müller", "Karl-Heinz Rummenigge", "Kenny Dalglish",
    "Johann Neeskens", "Ruud Gullit", "Frank Rijkaard", "Marco Tardelli",
    "Gabriel Batistuta", "Hristo Stoichkov", "Gheorghe Hagi", "Eric Cantona",
    "Dennis Bergkamp", "Thierry Henry", "Patrick Vieira", "Roy Keane",
    "Paul Scholes", "Ryan Giggs", "Steven Gerrard", "Frank Lampard",
    "Alan Shearer", "Andriy Shevchenko", "Raúl González", "Iker Casillas",
    "Carles Puyol", "Xavi Hernández", "Andrés Iniesta", "Andrea Pirlo",
    "Alessandro Del Piero", "Francesco Totti"
];

const promocion = ["Adriana Mattos", "Adriano Camacho", "Adriano Nuñez", "Adriano Quispe", "Alvaro", "Angeles", "Angelo", "Bryan (Hiuw)", "Cielo", "Dayra", "Diego (Michi)", "Elkin", "Fabian (FB)", "Gonzalo", "Henry", "Jamilet", "Jaqui", "Jeremy", "Jimena", "Joaquin (kbro)", "Joseph (D2)", "Julian", "Kenji", "Karla", "Kevin", "Laura", "Luisana", "Maria Jose", "Mariana", "Mariel", "Marycielo", "Matias (Eterete)", "Melanie", "Nathaly", "Nicolle", "Nita", "Pamela", "Sandra", "Pinoooo", "Rafael", "Rebeca", "Renzo (Pacho)", "Sebastian", "Selena", "Teran", "Victor (who?)", "Viery", "Prof. Gloria", "Prof. Arturo", "Prof. Jhon", "Prof. Zevallos", "Instructor Alex"];


const clubes = [
    // Europa - España
    "Real Madrid", "FC Barcelona", "Atlético de Madrid", "Sevilla FC", "Valencia CF",
    // Europa - Inglaterra
    "Manchester United", "Liverpool", "Manchester City", "Chelsea", "Arsenal",
    "Tottenham Hotspur", "Newcastle United", "Aston Villa",
    // Europa - Italia
    "Juventus", "AC Milan", "Inter de Milán", "AS Roma", "Napoli", "Lazio",
    // Europa - Alemania
    "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Bayer Leverkusen",
    // Europa - Francia
    "Paris Saint-Germain", "Olympique de Marseille", "AS Monaco", "Lyon",
    // Europa - Portugal
    "Benfica", "FC Porto", "Sporting de Lisboa",
    // Europa - Países Bajos
    "Ajax", "PSV Eindhoven", "Feyenoord",
    // Sudamérica - Brasil
    "Flamengo", "Palmeiras", "São Paulo", "Corinthians", "Santos", "Grêmio",
    "Internacional", "Cruzeiro", "Vasco da Gama", "Botafogo", "Atlético Mineiro",
    // Sudamérica - Argentina
    "Boca Juniors", "River Plate", "Independiente", "Racing Club", "San Lorenzo",
    "Huracán", "Vélez Sarsfield", "Estudiantes de La Plata", "Newell's Old Boys",
    // Sudamérica - Uruguay
    "Peñarol", "Nacional",
    // Sudamérica - Colombia
    "Millonarios", "América de Cali", "Atlético Nacional", "Deportivo Cali",
    // Sudamérica - Chile
    "Colo-Colo", "Universidad de Chile", "Universidad Católica",
    // **PERÚ - Clubes Peruanos**
    "Alianza Lima", "Universitario de Deportes", "Sporting Cristal",
    "FBC Melgar", "Sport Boys", "Deportivo Municipal",
    "Cienciano", "Juan Aurich", "Unión Huaral",
    // México
    "América", "Guadalajara", "Cruz Azul", "UNAM Pumas", "Tigres UANL", "Monterrey",
    // Resto del mundo
    "Celtic", "Rangers", "Galatasaray", "Fenerbahçe", "Besiktas",
    "Shakhtar Donetsk", "Dinamo Zagreb", "Red Bull Salzburg",
    // Asia
    "Al Hilal", "Al Ahly", "Wydad Casablanca",
    // MLS y otros
    "Los Angeles FC", "Inter Miami", "Atlanta United", "Seattle Sounders"
];

let arrayJuego = [];
let indiceActual = 0;
let jugadorElegido = "";

function validarConfiguracion(cantidadJugadores, cantidadImpostores) {
    if (cantidadImpostores >= cantidadJugadores) {
        alert("Error: No puede haber más impostores que jugadores");
        return false;
    }

    if (cantidadJugadores < 3) {
        alert("Error: Mínimo 3 jugadores");
        return false;
    }

    return true;
}

function inicializarPartida(listaJugadores) {
    const cantidadJugadores = parseInt(document.getElementById('cantidadJugadores').value);
    const cantidadImpostores = parseInt(document.getElementById('cantidadImpostores').value);

    if (!validarConfiguracion(cantidadJugadores, cantidadImpostores)) {
        return;
    }

    // Resetear variables
    arrayJuego = [];
    indiceActual = 0;

    // Obtener jugador actual aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaJugadores.length);
    jugadorElegido = listaJugadores[indiceAleatorio];

    // Crear array con impostores y jugadores
    arrayJuego = Array(cantidadImpostores).fill("IMPOSTOR")
        .concat(Array(cantidadJugadores - cantidadImpostores).fill(jugadorElegido));

    // Mezclar el array aleatoriamente (algoritmo Fisher-Yates)
    for (let i = arrayJuego.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayJuego[i], arrayJuego[j]] = [arrayJuego[j], arrayJuego[i]];
    }

    // Mostrar información inicial
    document.getElementById('jugadorActual').textContent = "Partida creada. Haz clic en 'Mostrar Siguiente'";
    document.getElementById('contador').textContent = `Total: ${arrayJuego.length}`;

    console.log("Array creado:", arrayJuego);
}

function mostrarJugadorActual() {
    inicializarPartida(jugadoresActuales);
}

function mostrarJugadorLeyenda() {
    inicializarPartida(jugadoresActuales);
}

function mostrarPromocion() {
    inicializarPartida(promocion);
}

function mmostrarClubes() {
    inicializarPartida(clubes);
}


function mostrarSiguiente() {
    if (arrayJuego.length === 0) {
        document.getElementById('jugadorActual').textContent = "Primero crea una partida con el botón 'Crear Array'";
        return;
    }

    if (indiceActual >= arrayJuego.length) {
        document.getElementById('jugadorActual').textContent = "¡Todos los jugadores mostrados, JUEGUEN!";
        return;
    }

    const elementoActual = arrayJuego[indiceActual];
    const jugadorActualDiv = document.getElementById('jugadorActual');

    if (elementoActual === "IMPOSTOR") {
        jugadorActualDiv.innerHTML = `<span class="text-red-500">${elementoActual} ☠️</span>`;
    } else {
        jugadorActualDiv.innerHTML = `<span class="text-green-500">${elementoActual} </span>`;
    }

    document.getElementById('contador').textContent = `Mostrando ${indiceActual + 1} de ${arrayJuego.length}`;
    indiceActual++;
}