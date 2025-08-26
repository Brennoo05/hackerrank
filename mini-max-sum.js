'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(lista) {
    
 let total = 0;
  let menor = lista[0];
  let maior = lista[0];

  for (let i = 0; i < lista.length; i++) {
    
    
    total = total + lista[i];  
    
          
    if (lista[i] < menor) menor = lista[i]; 
    if (lista[i] > maior) maior = lista[i]; 
  }

  let menorsoma = total - maior;
  let maiorsoma = total - menor; 

  console.log(menorsoma, maiorsoma);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

function teste(){
    let lista = [1,2,3,4,10,25]
    alert(miniMaxSum(lista))
}
