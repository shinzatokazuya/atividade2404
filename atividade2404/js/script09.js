let numeroAleatorio = Math.floor(Math.random() * 10) + 1;  // Gera o número aleatório apenas uma vez
let tentativas = 0;

function calcularNumero() {
    const numero = parseInt(document.getElementById('numero').value);  // Pega o número digitado pelo usuário
    const res = document.getElementById('resultado');
    res.innerHTML = "";  // Limpa o resultado anterior

    // Verifica se o número fornecido é válido
    if (isNaN(numero) || numero < 1 || numero > 10) {
        res.innerHTML += "Por favor, digite um número entre 1 e 10.";
        return;  // Sai da função se o número não for válido
    }

    // Contador de tentativas
    tentativas++;

    // Loop para continuar tentando até acertar
    while (numero !== numeroAleatorio) {
        if (numero < numeroAleatorio) {
            res.innerHTML += "O número que você jogou é menor. Tente novamente!";
        } else if (numero > numeroAleatorio) {
            res.innerHTML += "O número que você jogou é maior. Tente novamente!";
        }

        // Solicita ao usuário um novo número
        return; // A função termina aqui, e o usuário terá que enviar novamente
    }

    // Se o número estiver correto
    res.innerHTML += `Parabéns! Você acertou em ${tentativas} tentativa(s). O número era ${numeroAleatorio}.`;

    // Reseta o número aleatório e o contador de tentativas para um novo jogo
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
}
