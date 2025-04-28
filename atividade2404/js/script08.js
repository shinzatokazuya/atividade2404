function converterHoras() {
    let horas = parseInt(document.getElementById('horas').value);
    const res = document.getElementById('resultado');
    res.innerHTML = "";

    if (isNaN(horas) || horas < 0) {
        res.innerHTML += "Por favor, digite um número válido de horas (não negativo).";
    } else {
        let minutos = horas * 60;
        let segundos = minutos * 60;

        res.innerHTML += `${horas} hora(s) equivalem a ${minutos} minuto(s) e ${segundos} segundo(s).`
    }
}