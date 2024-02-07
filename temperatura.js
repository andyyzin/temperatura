let resposta = document.getElementById('resposta')

function calcular() {
    let celsius = Number(document.getElementById('celsius').value)

    let fahrenheit = (celsius * 1.8) + 32
    console.log(fahrenheit);    
    
    resposta.innerHTML = "Seu valor em graus Fahrenheit está aqui = " + fahrenheit
}



