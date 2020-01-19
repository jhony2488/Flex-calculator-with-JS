var etanol, gasolina, calporcengaso, status;

function calculo() {
    etanol = parseFloat(inputflex.inputEtanol.value.replace(",", "."));
    gasolina = parseFloat(inputflex.inputGasolina.value.replace(",", "."));
    calporcengaso = parseFloat(gasolina * (70 / 100));
    console.log(etanol);
    if (etanol >= calporcengaso) {
        document.getElementById("status").src = "images/gasolina.png";
    } else if (etanol <= calporcengaso) {
        document.getElementById("status").src = "images/etanol.png";
        // caso o preço do etanol seja menor ou igual a 70% do valor da gasolina
    }
}

function resetartudo() {
    document.getElementById("status").src = "images/neutro.png";

}