const matriz = [];

let numInicial = 1;
//para mostrar 50 numeros cambiamos el valor maximo de columnas(i o j) a 5, 156 
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

