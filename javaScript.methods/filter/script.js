var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);

function filtrar_pares(n){
    return n % 2 === 0;
}
//console.log(filtrar_pares(3));
//console.log(filtrar_pares(8));

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos(n){
    return n % 5 === 0;
}
var ret = numeros.filter(filtrar_pares);
console.log(ret);

var ret = numeros.filter(filtrar_impares);
console.log(ret);

var ret = numeros.filter(filtrar_multiplos);
console.log(ret);

var alunos = [
    {nome: 'Pedro', nota: 8.5},
    {nome: 'Maria', nota: 10},
    {nome: 'Fernanda', nota: 9.2},
    {nome: 'Ricardo', nota: 7.3},
]

function filtrar_nota_maiores_que_8(aluno){
    return aluno.nota > 8;
}

function filtrar_nota_maiores_que_7(aluno){
    return aluno.nota > 7;
}

var filtrados = alunos.filter(filtrar_nota_maiores_que_8);
//console.log(filtrados);

filtrados = alunos.filter(filtrar_nota_maiores_que_7);
console.log(filtrados.length);
console.log(alunos.length);