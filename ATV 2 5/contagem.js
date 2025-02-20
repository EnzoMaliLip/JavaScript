function contarCaracteres(str) {
    const contagem = {};

    for (let char of str) {
        if (contagem[char]) {
            contagem[char]++;
        } else {
            contagem[char] = 1;
        }
    }

    return contagem;
}

const resultado = contarCaracteres("Banana");
console.log(resultado);