const readline = require("readline-sync");

function dft_js(x) {
    let N = x.length;
    let n = Array.from({ length: N }, (_, i) => i);
    let k = n.map((i) => [i]);
    let M = n.map((i) => x.map((_, j) => Math.cos(2 * Math.PI * i * j / N) - Math.sin(2 * Math.PI * i * j / N)));
    
    let X = new Array(N).fill(0).map((_, i) => {
        let sum = 0;
        for (let j = 0; j < N; j++) {
            sum += M[i][j] * x[j];
        }
        return sum;
    });

    return X;
}


let n = Number(readline.question());
let inputSequence = []
for(let i=0; i<n; i++)  inputSequence.push(readline.question())
console.log(dft_js(inputSequence));
