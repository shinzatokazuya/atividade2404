function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais (CPF inválido)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto < 10 ? resto : 0;
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto < 10 ? resto : 0;
  
    // Compara os dígitos verificadores calculados com os dígitos informados
    return (
      parseInt(cpf.charAt(9)) === digitoVerificador1 &&
      parseInt(cpf.charAt(10)) === digitoVerificador2
    );
  }

  function validarCPF() {
    const cpf = parseInt(document.getElementById('cpf').value);
    const res = document.getElementById('resultado');
    res.innerHTML = "";

    if (cpf === null || cpfDigitado.trim() === "") {
        res.innerHTML += "Nenhum CPF foi digitado.";
    }

    if (validarCPF(cpf)) {
    res.innerHTML += `O CPF "${cpfDigitado}" é válido.`;
    } else {
    res.innerHTML += `O CPF "${cpfDigitado}" é inválido.`;
    }
  }