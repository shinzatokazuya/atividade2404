function gerarTabuada() {
    const numero = parseFloat(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const item = document.getElementById('li');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        resultado.appendChild(item);
    }
}