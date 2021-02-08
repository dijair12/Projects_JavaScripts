/* 
 - Conjuntos não aceitam repetição de valores
 - Conjuntos não são indexados;
*/

let cursos = new Set();

cursos.add('Programação para leigos');
cursos.add('Algoritmos e Lógicas de Programação');

cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

cursos.add('Banco de Dados');
cursos.add('Programação Web com Django Framework');

//console.log(cursos.has('Banco de Dados'));
//console.log(cursos.size);

//let tirar = cursos.delete('Programação para leigos');
//console.log(tirar);

//let colocar = cursos.add('Programação para leigosD');
//console.log(colocar);

let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];

frutas_unicas = new Set(frutas);

console.log(frutas_unicas);