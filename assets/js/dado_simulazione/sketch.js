let seed = 5; // Inizializzazione del seme
let dim = 25; // Dimensione dei quadratini


function R() {
    const x = (5 * seed + 1) % 16; // Calcolo del valore
    seed = x; // Aggiornamento del seme
    return x / 16; // Normalizzazione del valore tra 0 e 1
}

function setup() {
    createCanvas(550, 550);
    drawGrid();
}


function drawGrid() {
    // Posizione iniziale del quadratino
    let x = 0;
    let y = 0;

    // Iterazione su ogni riga
    for (let i = 0; i < height / dim; i++) {
        // Iterazione su ogni colonna
        for (let j = 0; j < width / dim; j++) {
            // Genera un numero casuale utilizzando la funzione R()
            let num = Math.ceil(R() * 6); // Moltiplica e arrotonda il risultato a un numero tra 1 e 6

            // Assegna un colore in scala di grigi basato sul numero generato
            let grayValue = map(num, 1, 6, 0, 255);
            fill(grayValue);

            // Disegna il quadratino con il colore corrispondente e le dimensioni specificate
            rect(x, y, dim, dim);

            // Aggiorna la posizione x per il prossimo quadratino
            x += dim;
        }

        // Aggiorna la posizione y per il prossimo quadratino
        y += dim;
        // Riporta la posizione x all'inizio della riga
        x = 0;
    }
}