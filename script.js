var capturando1 = 0;

function capturar1 () {
    capturando1 = document.getElementById('valor1').value;
    capturando1 = parseInt(capturando1) * 9/5 +32 +"ºF"
    document.getElementById('valorConvertido1').innerHTML = capturando1;
}

var capturando2 = 0;

function capturar2 () {
    capturando2 = document.getElementById('valor2').value;
    capturando2 = (parseInt(capturando2)-32) * 5/9 +"ºC"
    document.getElementById('valorConvertido2').innerHTML = capturando2;
}