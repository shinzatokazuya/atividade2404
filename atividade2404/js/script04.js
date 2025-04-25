function gerarSoma() {
    const limite = parseInt(document.getElementById('limite').value);
    const res = document.getElementById('resultado');
    res.innerHTML = "";

    let soma = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 == 0) {
            soma += i
        }
    }
    res.innerHTML += `A soma dos números pares até ${limite}: ${soma}.`;
}