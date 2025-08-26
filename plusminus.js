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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
     const arr = [];
 let positivos = 0;
 let negativos = 0;
 let zeros = 0;

 
function plusMinus(arr) {

 
   for (let i = 0; i < arr.length ; i++) {
        if(arr[i] > 0) {
            positivos++
        } else if (arr[i] < 0) {
            negativos++
        } else {
            zeros++
        }
    
   }
   
   console.log(positivos / arr.length);
   console.log(negativos / arr.length);
   console.log(zeros / arr.length);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
