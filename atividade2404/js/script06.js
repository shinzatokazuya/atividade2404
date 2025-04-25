function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
      }
      if (numero <= 3) {
        return true;
      }
      if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
      }
      for (let i = 5; i * i <= numero; i = i + 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
          return false;
        }
      }
      return true;
}

function gerarPrimo() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const fim = parseInt(document.getElementById('fim').value);
    const res = document.getElementById('resultado');
    res.innerHTML = '';

    if (isNaN(inicio) || isNaN(fim)) {
        res.innerHTML += "Por favor, digite números inteiros válidos.";
    }
    if (inicio > fim) {
        res.innerHTML += "O valor inicial não pode ser maior que o valor final.";
    }
    let primo = [];

    for (let i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            primo.push(i);
        }    
    }

    if (primo.length > 0) {
        res.innerHTML += `Os números primos entre ${inicio} e ${fim} são: ${primo}`
    } else {
        res.innerHTML += `Não foram encontrados números primos entre ${inicio} e ${fim}.`
    }
}