const numOne = Number(prompt('Digite o primeiro número:'))
const numTwo = Number(prompt('Digite o segundo número:'))

alert('Soma: ' + (numOne + numTwo))
alert('Subtração: ' + (numOne - numTwo))
alert('Multiplicação: ' + (numOne * numTwo))
alert('Divisão: ' + (numOne / numTwo).toFixed(2))
alert('Resto da divisão: ' + (numOne % numTwo))


const sum = numOne + numTwo

if (sum % 2 == 0 ) {
    alert('A soma dos dois números é par')
} else {
    alert('A soma dos dois números é ímpar')
}

if (numOne == numTwo) {
    alert('Os números inseridos são iguais.')
} else {
    alert('Os números inseridos são diferentes.')
}