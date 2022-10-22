let nome = ""
let idade = 42

// alert("Nome: " + nome + " idade: " + idade)

// document.getElementById('numero').value = "Valor preenchido no script";

function mostraMenor(num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // if (num1 > num2) alert("Número " + num1 + " é maior que o número " + num2)
    // else if (num1 == num2) alert("Números iguais")
    // else alert("Número " + num2 + " é maior que o número " + num1)

    if (num1 > num2) resultado = "Número " + num1 + " é maior que o número " + num2
    else if (num1 == num2) resultado = "Números iguais"
    else resultado = "Número " + num2 + " é maior que o número " + num1

    document.getElementById('resultado').innerHTML = resultado
}