const readline = require("readline-sync");

function dft(x) {
    const N = x.length;
    const X_real = new Array(N).fill(0);
    const X_imag = new Array(N).fill(0);

    for (let k = 0; k < N; k++) {
        for (let n = 0; n < N; n++) {
            const angle = (-2 * Math.PI * k * n) / N;
            const cosTerm = Math.cos(angle);
            const sinTerm = Math.sin(angle);
            X_real[k] += x[n] * cosTerm;
            X_imag[k] += x[n] * sinTerm;
        }
    }

    return { real: X_real, imag: X_imag };
}

let n = Number(readline.question());
let inputSequence = []
for(let i=0; i<n; i++)  inputSequence.push(readline.question());

const dftResult = dft(inputSequence);
console.log("DFT result (real part):", dftResult.real);
console.log("DFT result (imaginary part):", dftResult.imag);
