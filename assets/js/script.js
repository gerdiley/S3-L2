// esercizio 1

var nome = 'Aldo';
let cliente = 'cliente';
const costante = '3.14';

document.getElementById('concatena').innerHTML = nome + ',' + ' ' + cliente + ',' + '' + ' ' + costante;

// esercizio 2

var combinazione = nome + ',' + ' ' + cliente + ',' + '' + ' ' + costante;

document.getElementById('concatena2').innerHTML = combinazione

// esercizi 3

// riga 1

var nome = 'Mario';

document.getElementById('var').innerHTML = nome;


{
    let nome = 'Carla';
    document.getElementById('let').innerHTML = nome;
}

document.getElementById('var').innerHTML = nome;


document.getElementById('final').innerHTML = nome;


// riga 2

{ let nome = 'Mario';
    document.getElementById('let2').innerHTML = nome;
}

{ let nome = 'Carla';
    document.getElementById('let3').innerHTML = nome;
}

{ let nome = 'Carla';
    document.getElementById('final2').innerHTML = nome;
}


// esercizio 4

var iniziale = 15;
var incremento = iniziale+iniziale;
var decremento = iniziale - 10;

document.getElementById('iniziale').innerHTML += iniziale;



// document.getElementById('valore1').innerHTML += (iniziale + iniziale) + ', ' + ((iniziale + iniziale) + 1);

document.getElementById('valore1').innerHTML += incremento++ + ', ' + (incremento);

document.getElementById('valore2').innerHTML += (decremento--) + ', ' +(decremento); 

document.getElementById('valore3').innerHTML += (iniziale*3);

document.getElementById('valore4').innerHTML += (iniziale/3);

document.getElementById('valore5').innerHTML += iniziale + ' è un numero';













