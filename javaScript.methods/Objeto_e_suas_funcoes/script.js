const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}


/* console.log(curso);

console.log(typeof(curso));

console.log(Object.keys(curso));

console.log(Object.values(curso));

console.log(Object.entries(curso));

Object.entries(curso).forEach(par => {
    console.log(`${par[0]}: ${par[1]}`);
});
 
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});


curso.nome = 'Criação de APIs REST com Django REST FRAMEWORK';

Object.defineProperty(curso, 'publicacao',{
    enumerable: true,
    writable: true,
    value: '07/12/2019'
});

curso.publicacao = '01/01/2020';

console.log(curso);
console.log(curso.publicacao);


Object.freeze(curso);

curso.nome = 'Web js React' //Não alterado

console.log(curso);

*/
const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek university'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony'}
];

//console.log(usuarios);

//console.table(usuarios);

console.table(curso);