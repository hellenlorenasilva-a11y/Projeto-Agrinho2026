function abrirPagina(id) {

    let paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function (pagina) {
        pagina.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}
function entrar() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmar = document.getElementById("confirmar").value;

    if (nome == "" || email == "" || senha == "" || confirmar == "") {
        alert("Preencha todos os campos");
        return;

    } else if (senha != confirmar) {
        alert("As senhas não coincidem");
        return;
    }
}


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
let relatorios = [

    "Janeiro: Aplicação de NPK 20-10-10",

    "Março: Adubação orgânica",

    "Junho: Correção de solo",

    "Agosto: Monitoramento de nutrientes"

];

let area = document.getElementById("listaRelatorios");

relatorios.forEach(function (item) {

    area.innerHTML += "<p>• " + item + "</p>";

});
