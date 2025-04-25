function Fatorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const res = document.getElementById('resultado');
    res.innerHTML = "";

    let fatorial = 1;

    if (numero == 0 || numero == 1) {
        res.innerHTML += `Fatorial de ${numero}! = 1"`
    } else {
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
    }
    res.innerHTML += `Fatorial de ${numero}!: ${fatorial}`;
}