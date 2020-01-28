var etanol, gasolina, calporcengaso, status, calculoDiferença, tituloModal, conteudoModal, modalTudo;

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

    if (etanol > gasolina) {
        calculoDiferença = parseInt((gasolina / etanol) * 100);
        tituloModal = document.querySelector('.modal-body h1');
        tituloModal.innerHTML = calculoDiferença + "%";
        conteudoModal = document.querySelector('.modal-body p');
        conteudoModal.innerHTML = "A gasolina está" + calculoDiferença + "%" + " " + "do valor do etanol";

    } else if (etanol < gasolina) {
        calculoDiferença = parseInt((etanol / gasolina) * 100);
        tituloModal = document.querySelector('.modal-body h1');
        tituloModal.innerHTML = calculoDiferença + "%";
        conteudoModal = document.querySelector('.modal-body p');
        conteudoModal.innerHTML = "O etanol está" + " " + calculoDiferença + "%" + " " + "do valor da gasolina";

    }
    if (inputflex.inputEtanol.value == "" || inputflex.inputGasolina.value == "") {
        alert('Insira Valores');

    }
}

function resetartudo() {
    document.getElementById("status").src = "images/neutro.png";
    calculoDiferença = 0;
    tituloModal = document.querySelector('.modal-body h1');
    tituloModal.innerHTML = " Insira Valores";
    conteudoModal = document.querySelector('.modal-body p');
    conteudoModal.innerHTML = " ";

}
