function imc() {

    let altura = document.getElementById('input-altura').value
    let peso = document.getElementById('input-peso').value

    let numero = document.getElementById('p-res-num')
    let texto = document.getElementById('p-res-txt')

    let p_calculo = document.getElementById('p-mostra-calculo')

    let calculo = peso / (altura ** 2)

    let resultado = ''

    if (altura == '' && peso == '') {

        alert('Nenhum dado foi informado!')

    } else if (altura == '') {

        alert('A altura não foi informada!')

    } else if (peso == '') {

        alert('O peso não foi informado!')

    } else if (calculo < 18.5) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 0, 0)'
        texto.innerHTML = `Você está Desnutrido.`
        resultado = `Você está Desnutrido.`

    } else if (calculo <= 24.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(0, 255, 0)'
        texto.innerHTML = `Você está no Peso Adequado.`
        resultado = `Você está no Peso Adequado.`

    } else if (calculo <= 29.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 255, 0)'
        texto.innerHTML = `Você está em Sobrepeso.`
        resultado = `Você está em Sobrepeso.`

    } else if (calculo <= 34.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 111, 0)'
        texto.innerHTML = `Você está em Obesidade Grau 1.`
        resultado = `Você está em Obesidade Grau 1.`

    } else if (calculo <= 39.9) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 50, 0)'
        texto.innerHTML = `Você está em Obesidade Grau 2.`
        resultado = `Você está em Obesidade Grau 2.`

    } else if (calculo >= 40) {

        numero.innerHTML = `${calculo.toFixed(2)}`
        texto.style.color = 'rgb(255, 0, 0)'
        texto.innerHTML = `Você está em Obesidade Grau 3.`
        resultado = `Você está em Obesidade Grau 3.`

    }

    if (altura != '' && peso != '') {

        p_calculo.innerHTML = `Primeiro foi pego a sua altura e multiplicou por ela mesma:
                        <br>(${altura} * ${altura})
                        <br>Depois  foi pego o seu peso e dividiu pelo
                        <br>o resultado da multiplicação da sua altura
                        <br>${peso} / (${altura} * ${altura})
                        <br>E com base na tabela acima foi constatado que:
                        <br>${resultado}`

    }

}

function limpar_dados() {
    let altura = document.getElementById('input-altura')
    let peso = document.getElementById('input-peso')

    let p_num = document.getElementById('p-res-num')
    let p_txt = document.getElementById('p-res-txt')

    let p_calculo = document.getElementById('p-mostra-calculo')

    altura.value = ''
    peso.value = ''

    p_num.innerHTML = ''
    p_txt.innerHTML = ''

    p_calculo.innerHTML = ''

}
