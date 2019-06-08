function calcular() {
    let modelo = document.getElementById('modelo').value
    let qtd = document.getElementById('qtd').value
    let cor = document.getElementById('cor').value

    let resultado = parseFloat(modelo) * parseFloat(qtd) * parseFloat(cor)

    if(modelo !== '' && qtd !== '' && cor !== ''){
        alert('Isso dá '+resultado)
    }

    
}