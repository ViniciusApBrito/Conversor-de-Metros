
function calculo() {
    var valor = parseFloat(document.getElementById("valor").value);
    var converter = document.getElementById("converter").value;
    var resultado;

    switch (converter) {
        case "Quilometro":
            resultado = valor / 1000
            break;
        case "Centimetro":
            resultado = valor * 100
            break;
        case "Milimetro":
            resultado = valor * 1000
            break;
        case "Milha":
            resultado = valor / 1609
            break;
        case "Jarda":
            resultado = valor * 1.094
            break;
        case "Pe":
            resultado = valor * 3.281
            break;
        case "Polegada":
            resultado = valor * 39.37
            break;
        case "Milha_Nautica":
            resultado = valor * 1852
            break;
    }

    document.getElementById('resultado').value = resultado;
}