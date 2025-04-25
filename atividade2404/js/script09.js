function calcularNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const res = document.getElementById('resultado');
    res.innerHTML = "";
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        tentativas++;
    
        // Verifica se o usuário cancelou a entrada
        if (numero === null) {
          res.innerHTML += `Você desistiu. O número era ${numeroAleatorio}.`;
          break;
        }
    }

    if (isNaN(numero) || numero < 1 || numero > 10) {
        res.innerHTML += "Por favor, digite um número entre 1 e 10.";
      }
  
      if (numero === numeroAleatorio) {
        res.innerHTML += `Parabéns! Você acertou em ${tentativas} tentativa(s). O número era ${numeroAleatorio}.`;
        acertou = true;
      } else if (numero < numeroAleatorio) {
        res.innerHTML += "O número é maior.";
      } else {
        res.innerHTML += "O número é menor.";
      }
}