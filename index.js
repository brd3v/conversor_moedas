const moeda = document.getElementById('reais')
const action = document.getElementById('btn')
const result = document.getElementById('result')
const cotacao = document.getElementById('cotacao')

fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
.then((r) => r.json())
.then( (data) => {
let retorno = data.USDBRL
action.addEventListener('click',() => {
    let count = moeda.value / retorno.high
        result.innerHTML =`resultado da conversão é: $${count.toFixed(2)}`
    
})


cotacao.innerHTML = `A cotação atual do Dolar é: $${parseFloat(retorno.high).toFixed(2)}`


    console.log(retorno.high)})
.catch((error) => console.log(error))