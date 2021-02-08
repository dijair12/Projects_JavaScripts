/* let nome = 'Geek university';

for(let letra of nome){
    console.log(letra);
} */

/* let numeros = [1, 2, 3, 4, 5, 6];

for(let numero of numeros){
    console.log(numero * 2);
} */

/* let numeros = [1, 2, 3, 4, 5, 6];

for(let indice in numeros){
    console.log(`Indice; ${indice}, Valor: ${numeros[indice]}`);
} */

let cursos = new Map([
    [1, 'League of Draven'],
    [2, 'League of Lee sin'],
    [3, 'League of Quinn'],
    [4, 'League of Darius'],
    [5, 'League of Legends'],
]);

/* for(let curso of cursos){
    console.log(`${curso[0]} - ${curso[1]}`);
} */

//Somente a chave do Map

/* for(let chave of cursos.keys()){
    console.log(chave);
} */

//Somente o valor

/* for(let valor of cursos.values()){
    console.log(valor);
} */

//Chave/valor

/* for(let [chave, valor] of cursos.entries()){
    console.log(`${chave} - ${valor}`);
}
 */

 let conjunto = new Set([1, 3, 3, 4, 5, 6]);

 for(let numero of conjunto){
     console.log(numero);
 }
