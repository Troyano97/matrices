const matriz = [];

let numInicial = 1;
//para mostrar 50 numeros cambiamos el valor de la columna o fila (i o j) a 5,15,16,20 y el maximo a numInicial en 50 150,151,200
for (let i = 0; i < 10; i++) {
    matriz.push([]);
    for (let j = 0; j < 10; j++) {
        matriz[i].push(numInicial);
        numInicial++;

        if (numInicial > 100) {
            break;
        }
    }
}
console.table(matriz);

