const array = [
    {nome: 'dijair', preco: 2333.76, desconto: 0.5},
    {nome: 'mayara', preco: 2313.76, desconto: 0.2},
    {nome: 'michael', preco: 23.76, desconto: 0.1},
    {nome: 'daiane', preco: 23.763, desconto: 0.7},
    {nome: 'karina', preco: 233.76, desconto: 0.5},
]

function getCusto(precoComDesconto) {
    return parseInt(precoComDesconto * 0.3)
}

function getPrecoComDesconto(produto){
    return produto.preco * (1 - produto.desconto)
}

const resultado = array
    .map(getPrecoComDesconto)
    .map(getCusto)
console.log(resultado);