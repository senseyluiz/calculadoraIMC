
function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso / (altura**2);
    
    let resultado = document.getElementById("imc");
    resultado.innerHTML = imc.toFixed(2);
}

