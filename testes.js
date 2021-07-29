let temperatura = 19;
let escalaOrigem = 'Celsius';
let escalaDesejada = 'Kelvin';

if(escalaOrigem === 'Celsius' && escalaDesejada === 'Kelvin'){
    temperatura += 273.15; 
    console.log(temperatura);   
}

if(escalaOrigem === "Kelvin" &&  escalaDesejada === "Celsius"){
    temperatura -= 273.15; 
    console.log(temperatura);   
}

if(escalaOrigem === "Celsius" && escalaDesejada === "Fahrenheit"){
    temperatura = temperatura * 1.8 + 32; 
    console.log(temperatura);   
}

if(escalaOrigem === "Fahrenheit" && escalaDesejada === "Celsius"){
    temperatura = (temperatura -32) / 1.8; 
    console.log(temperatura);   
}

if(escalaOrigem === "Kelvin" && escalaDesejada === "Fahrenheit"){
    temperatura = temperatura * 9 / 5 + 32; 
    console.log(temperatura);   
}

if(escalaOrigem === "Kelvin" && escalaDesejada === "Fahrenheit"){
    temperatura = temperatura + 273; 
    console.log(temperatura);   
}

