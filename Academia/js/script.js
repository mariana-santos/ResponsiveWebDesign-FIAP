console.log(window.location.href)

if(window.location.href.indexOf('login') >= 1){

    let btn_login = document.getElementById('btn_login')

    btn_login.addEventListener('click', () => {

        let user = document.getElementById('user').value
        let senha = document.getElementById('senha').value

        if(user == 'mariana' && senha == '12345') window.location.href = "calculo.html"
        else alert ("user ou senha incorreto(s). por favor tente novamente")
    })

}

else{

    let btn_imc = document.getElementById('calcular')

    btn_imc.addEventListener('click', () => {
    
        let peso = parseFloat(document.getElementById('peso').value)
        let altura = parseFloat(document.getElementById('altura').value)
    
        let imc = peso / (altura * altura)

        let classificacao = ''
    
        if(imc < 18.5) classificacao = 'magreza'
        else if (imc >= 18.5 && imc <= 24.9) classificacao = 'normal'
        else if(imc >= 25 && imc <= 29.9) classificacao = 'sobrepeso'
        else if(imc >= 30 && imc <= 39.9) classificacao = 'obesidade'
        else if(imc > 40) classificacao = 'obesidade grave'

        let resultado = document.getElementById('resultado')
        let valor_imc = document.getElementById('valor_imc')
        let classificacao_ = document.getElementById('classificacao')

        if(document.getElementById('peso').value == '' || document.getElementById('altura').value == '') 
            alert('dados inválidos. por favor tente novamente')

        else{
            valor_imc.innerText = imc.toFixed(1)
            classificacao_.innerText = classificacao
            resultado.style.display = 'block';
        }
    
    })
}