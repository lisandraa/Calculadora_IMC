const form = document.getElementById('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let img = document.getElementById('imagem')
    let sexo = document.getElementById('sexo')
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')

    let img2 = document.getElementById('imagem2')

    let imc = (peso.value / (altura.value * altura.value)).toFixed(2)

        const valor = document.getElementById('valor')
        let description = ''

    if(sexo.value =='masculino'){
        if (imc < 18.5){    
            description = 'Cuidado! Você está abaixo do peso ideal!'
            img2.innerHTML = '<img src="assets/images/abaixo_do_peso.png" alt="abaixo">'
        } 

        else if (imc >= 18.5 && imc <= 25) {
            description = "Você está no peso ideal!"
            img2.innerHTML = '<img src="assets/images/peso ideal.png" alt="abaixo">'
        }

        else if (imc > 25 && imc <= 30) {
            description = "Cuidado! Você está acima do peso!"
            img2.innerHTML = '<img src="assets/images/acima_do_peso.png" alt="abaixo">'
        }

        else if (imc > 30 && imc <= 35) {
            description = "Cuidado! Você está com obesidade nível I !"
            img2.innerHTML = '<img src="assets/images/obesidade.png" alt="abaixo">'
        }

        else{
            description = "Cuidado! Você está com obesidade extrema!"
            img2.innerHTML = '<img src="assets/images/obesidade_extrema.png" alt="abaixo">'
        }

        valor.textContent = imc
        document.getElementById('description').textContent = description
}

if(sexo.value =='feminino'){
    if (imc < 18.5){    
        description = 'Cuidado! Você está abaixo do peso ideal!'
        img2.innerHTML = '<img src="assets/images/abaixo_do_peso.png" alt="abaixo">'
    } 

    else if (imc >= 18.5 && imc <= 25) {
        description = "Você está no peso ideal!"
        img2.innerHTML = '<img src="assets/images/peso ideal.png" alt="abaixo">'
    }

    else if (imc > 25 && imc <= 30) {
        description = "Cuidado! Você está acima do peso!"
        img2.innerHTML = '<img src="assets/images/acima_do_peso.png" alt="abaixo">'
    }

    else if (imc > 30 && imc <= 35) {
        description = "Cuidado! Você está com obesidade nível I !"
        img2.innerHTML = '<img src="assets/images/obesidade.png" alt="abaixo">'
    }

    else{
        description = "Cuidado! Você está com obesidade extrema!"
        img2.innerHTML = '<img src="assets/images/obesidade_extrema.png" alt="abaixo">'
    }
    valor.textContent = imc
    document.getElementById('description').textContent = description
}

})

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calcular').click();
    }
})