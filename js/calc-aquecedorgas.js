const campos = document.querySelectorAll("input");

campos.forEach(campo=>{
    campo.addEventListener("input",calcular);
});

function numero(id){
    return parseFloat(document.getElementById(id).value) || 0;
}

function calcular(){

    const tempEntrada = numero("tempEntrada");
    const tempPainel = numero("tempPainel");

    const vazaoDucha = numero("vazaoDucha");
    const qtdDucha = numero("qtdDucha");

    const vazaoTorneira = numero("vazaoTorneira");
    const qtdTorneira = numero("qtdTorneira");

    const deltaT = tempPainel-tempEntrada;

    const vazaoTotal =
        (vazaoDucha*qtdDucha)+
        (vazaoTorneira*qtdTorneira);

    const potencia =
        vazaoTotal*deltaT;

    const etiqueta =
        potencia/20;

    document.getElementById("deltaT").textContent =
        deltaT.toFixed(1)+" °C";

    document.getElementById("vazaoTotal").textContent =
        vazaoTotal.toFixed(1)+" L/min";

    document.getElementById("potencia").textContent =
        potencia.toFixed(1)+" kcal/min";

    document.getElementById("etiqueta").textContent =
        etiqueta.toFixed(1)+" L/min";
}

calcular();