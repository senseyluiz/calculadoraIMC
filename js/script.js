
function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso / (altura**2);
    
    let resultado = document.getElementById("imc");
    resultado.innerHTML = imc.toFixed(2);

    let resposta = document.getElementById("resposta");
    
    if(imc < 18,5){
        resposta.innerHTML = "<p>Você está abaixo do peso.</p>"
    }

    if(imc >= 18,5 && imc < 25){
        resposta.innerHTML = "<p>Você está com peso normal!</p>"
    }

    if(imc >= 25 && imc < 30){
        resposta.innerHTML = "<p>Você está com sobrepeso!</p>"
    }

    if(imc >= 30){
        resposta.innerHTML = "<p>Você está com obesidade. CUIDADO!!!</p>"
    }
    
}

function limpar(){
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("imc").innerHTML= "";
}

