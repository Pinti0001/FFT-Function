
function dftBasic(x) {

    const N = x.length;
    const X = new Array(N).fill(0); 

    for (let k = 0; k < N; k++) {
        let X_k = 0;
        for (let n = 0; n < N; n++) {
            const angle = (-2 * Math.PI * k * n) / N;
            X_k += x[n] * (Math.cos(angle) - Math.sin(angle) * 1);
        }
        X[k] = X_k;
    }

    return X;
}


const inputSequence = [1, 2, 3, 4, 5];
console.log(dftBasic(inputSequence));
