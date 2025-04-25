function converterHoras() {
    const horas = parseInt(document.getElementById('horas'));
    const res = document.getElementById('resultado');
    res.innerHTML = "";

    if (isNaN(horas) || horas < 0) {
        res.innerHTML += "Por favor, digite um número válido de horas (não negativo).";
    }

    let minutos = horas * 60;
    let segundos = minutos * 60;

    res.innerHTML += `${horas} hora(s) equivalem a ${minutos} minuto(s) e ${segundos} segundo(s).`
}