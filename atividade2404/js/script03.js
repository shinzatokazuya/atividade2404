function gerarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    const res = document.getElementById('resultado');
    res.innerHTML = "";

    if (isNaN(idade)) {
        res.innerHTML += "Digite um número válido."
    } else if (idade >= 0 && idade <= 12) {
        res.innerHTML += "Criança"
    } else if (idade <= 17) {
        res.innerHTML += "Adolescente"
    } else if (idade < 60) {
        res.innerHTML += "Adulto"
    } else {
        res.innerHTML += "Idoso"
    }
}