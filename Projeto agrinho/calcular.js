function calcular() {

    let cidade = document.getElementById("cidade").value;
    let plantio = document.getElementById("plantio").value;
    let terras = document.getElementById("terras").value;

    let quantidade = terras * 50;
    let tempo = "90 dias";

    document.getElementById("resultado").innerHTML =

        "<h3>RESULTADO</h3>" +

        "<p><b>Cidade:</b> " + cidade + "</p>" +

        "<p><b>Plantio:</b> " + plantio + "</p>" +

        "<p><b>Quantidade ideal:</b> " + quantidade + " kg</p>" +

        "<p><b>Nova adubação:</b> " + tempo + "</p>";

}