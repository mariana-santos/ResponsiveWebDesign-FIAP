
function validaFormulario(){
    var nome = document.getElementById('nome').value
    var erro_nome = document.getElementById('erro_nome')

    if(nome == '') erro_nome.style.display = 'block'

    var sobrenome = document.getElementById('sobrenome').value
    var erro_sobrenome = document.getElementById('erro_sobrenome')

    if(sobrenome == '') erro_sobrenome.style.display = 'block'

    var idade = document.getElementById('idade').value
    var erro_idade = document.getElementById('erro_idade')

    if(idade == '') erro_idade.style.display = 'block'

    else if(idade <= 0) {
        erro_idade.style.display = 'block'
        erro_idade.innerHTML = "Campo idade deve ser maior que 0"
    }

    else if(idade >= 150) {
        erro_idade.style.display = 'block'
        erro_idade.innerHTML = "Campo idade deve ser menor que 150"
    }

}